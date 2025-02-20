import { Button } from "@fullstacked/ui";
import fs from "fs";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import * as sass from "sass";

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
    if (await fs.exists(outDir)) {
        await fs.rmdir(outDir);
    }
    await fs.mkdir(outDir);

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
    await fs.writeFile(outDir + "/index.css", css);

    const docTemplate = await fs.readFile("/assets/doc-template.html", {
        encoding: "utf8",
    });

    const order: string[] = JSON.parse(
        await fs.readFile("order.json", { encoding: "utf8" }),
    );

    const nav = document.createElement("nav");
    let sectionName: string;
    let list = document.createElement("ul");
    nav.append(list);
    for (let i = 0; i < order.length; i++) {
        const section = order[i]
            .slice(docsDir.length + 1)
            .split("/")
            .slice(0, -1)
            .pop();

        if (section !== sectionName) {
            list = document.createElement("ul");
            if (section) {
                const title = document.createElement("div");
                title.innerText = section;
                nav.append(title);
            }
            nav.append(list);
            sectionName = section;
        }

        const path =
            i === 0
                ? "/"
                : order[i]
                      .slice(docsDir.length)
                      .split(".")
                      .slice(0, -1)
                      .join(".");

        const name = i === 0 ? "introduction" : path.split("/").pop();

        const li = document.createElement("li");

        li.innerHTML = `<a href="${path}">${name}</a>`;
        list.append(li);
    }

    order.forEach(async (f, i) => {
        const contents = await fs.readFile(f, { encoding: "utf8" });
        const path =
            i === 0
                ? outDir + "/index.html"
                : outDir +
                  f.slice(docsDir.length).split(".").slice(0, -1).join(".") +
                  "/index.html";
        const dir = path.split("/").slice(0, -1).join("/");
        await fs.mkdir(dir);

        const rendered = await marked.parse(contents);
        const html = docTemplate
            .replace("{{ MD }}", rendered)
            .replace("{{ NAV }}", nav.outerHTML);

        fs.writeFile(path, html);
    });
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
