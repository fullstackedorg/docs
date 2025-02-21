import { Button } from "@fullstacked/ui";
import fs from "fs";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import * as sass from "sass";
import { getOrder, getTitles } from "..";
import { gfmHeadingId } from "marked-gfm-heading-id";
import archive from "archive";

export function DeployButton() {
    const button = Button({
        text: "Deploy",
    });

    button.onclick = () => Deploy();

    return button;
}

const docsDir = "docs";
const outDir = "data/out";

async function Deploy() {
    const files: Parameters<typeof archive.zip>[0] = {};

    const scss = await fs.readFile("/assets/index.scss", { encoding: "utf8" });
    const { css } = await sass.compileStringAsync(scss, {
        importer: {
            load: async (url) => {
                const path = url.pathname.startsWith("/node_modules")
                    ? url.pathname
                    : "/assets" + url.pathname;

                const contents = await fs.readFile(path, {
                    encoding: "utf8",
                });
                return {
                    syntax: "scss",
                    contents,
                };
            },
            canonicalize: (path) => {
                return new URL(path, window.location.href);
            },
        },
    });
    files["index.css"] = {
        isDir: false,
        contents: css,
    };

    const titles = await getTitles();

    const docTemplate = await fs.readFile("/assets/doc-template.html", {
        encoding: "utf8",
    });

    const order = await getOrder();

    const renderPromises = order.map(async (f, i) => {
        const contents = await fs.readFile(f, { encoding: "utf8" });
        const path =
            i === 0
                ? "index.html"
                : f
                      .slice(docsDir.length + 1)
                      .split(".")
                      .slice(0, -1)
                      .join(".") + "/index.html";
        const dir = path.split("/").slice(0, -1).join("/");
        if (dir) {
            files[dir] = {
                contents: null,
                isDir: true,
            };
        }

        const links = document.createElement("ul");
        contents.match(/#{2,3}.*/g)?.forEach((item) => {
            const title = item.replace(/#/g, "").trim();
            const id = title.toLowerCase().replace(/ /g, "-");
            const li = document.createElement("li");
            li.innerHTML = `<a href="#${id}">${title}</a>`;
            links.append(li);
        });

        const rendered = await marked.parse(contents);
        const html = docTemplate
            .replace("{{ MD }}", rendered)
            .replace("{{ LINKS }}", links.outerHTML)
            .replace("{{ NAV }}", generateNav(order, f, titles));

        files[path] = {
            contents: html,
            isDir: false,
        };
    });
    await Promise.all(renderPromises);

    archive.zip(files, "data/site.zip");
}

const marked = new Marked(
    markedHighlight({
        async: true,
        emptyLangClass: "hljs",
        langPrefix: "hljs language-",
        highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : "plaintext";
            return hljs.highlight(code, { language }).value;
        },
    }),
);
marked.use(gfmHeadingId());

function generateNav(
    files: string[],
    active: string,
    titles: { [path: string]: string },
) {
    const nav = document.createElement("nav");
    let sectionName: string;
    let list = document.createElement("ul");
    nav.append(list);
    for (let i = 0; i < files.length; i++) {
        const section = files[i]
            .slice(docsDir.length + 1)
            .split("/")
            .slice(0, -1)
            .pop();

        if (section !== sectionName) {
            list = document.createElement("ul");
            if (section) {
                const title = document.createElement("div");
                title.innerText =
                    section.at(0).toUpperCase() + section.slice(1);
                nav.append(title);
            }
            nav.append(list);
            sectionName = section;
        }

        const path =
            i === 0
                ? "/"
                : files[i]
                      .slice(docsDir.length)
                      .split(".")
                      .slice(0, -1)
                      .join(".");

        const name = titles[files[i]] || path.split("/").pop();

        const li = document.createElement("li");

        li.innerHTML = `<a href="${path}">${name}</a>`;

        if (files[i] === active) {
            li.classList.add("active");
        }

        list.append(li);
    }

    return nav.outerHTML;
}
