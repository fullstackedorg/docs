import fs from "fs";
import * as sass from "sass";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import { getOrder, getTitles } from "..";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { Button } from "@fullstacked/ui";

export async function renderStyle(minified = false) {
    const scss = await fs.readFile("/assets/index.scss", { encoding: "utf8" });
    const { css } = await sass.compileStringAsync(scss, {
        style: minified ? "compressed" : "expanded",
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

    return css;
}

const docsDir = "docs";

export async function renderSite(page: string = null): Promise<{
    [filePath: string]: {
        isDir: boolean;
        contents: string;
    };
}> {
    const files: Awaited<ReturnType<typeof renderSite>> = {};

    const script = await fs.readFile("/assets/script.js", { encoding: "utf8" });
    files["script.js"] = {
        isDir: false,
        contents: script,
    };

    const css = await renderStyle(page ? false : true);
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
        if (page && f !== page) return;

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
            const id = title.toLowerCase()
                .replace(/ /g, "-")
                .replace(/,/g, "");
            const li = document.createElement("li");
            li.innerHTML = `<a href="#${id}">${title}</a>`;
            links.append(li);
        });

        const { nav, prev, next } = generateNav(order, f, titles);

        const rendered = await marked.parse(contents);
        let html = docTemplate
            .replace("{{ MD }}", rendered)
            .replace("{{ LINKS }}", links.outerHTML)
            .replace("{{ NAV }}", nav)
            .replace(
                "{{ PREV }}",
                prev ? createButton(prev[0], prev[1], false) : "<div></div>",
            )
            .replace(
                "{{ NEXT }}",
                next ? createButton(next[0], next[1], true) : "<div></div>",
            )
            .replace("{{ PAGE }}", f)
            .replace("{{ PAGE }}", f)
            .replace(
                "{{ ANALYTICS }}",
                page
                    ? ""
                    : `<script defer data-domain="docs.fullstacked.org" src="https://plausible.cplepage.com/js/script.js"></script>`,
            )
            .replace(
                "{{ STYLE }}",
                page
                    ? `<style>${css}</style>`
                    : `<link rel="stylesheet" href="/index.css" />`,
            )
            .replace(
                "{{ SCRIPT }}",
                page
                    ? `<script>${script}</script`
                    : `<script src="/script.js"></script>`,
            );

        if (prev) {
            html = html
                .replace("{{ PREV }}", prev[0])
                .replace("{{ PREV_URL }}", prev[1]);
        }

        if (next) {
            html = html
                .replace("{{ NEXT_NAME }}", next[0])
                .replace("{{ NEXT_URL }}", next[1]);
        }

        files[path] = {
            contents: html,
            isDir: false,
        };
    });
    await Promise.all(renderPromises);

    return files;
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
    // remove last element (privacy-policy)
    files = files.slice(0, -1)
    const nav = document.createElement("nav");
    let sectionName: string;
    let list = document.createElement("ul");
    nav.append(list);
    let activeIndex: number,
        links: [string, string][] = [];
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

        links.push([name, path]);

        const li = document.createElement("li");

        li.innerHTML = `<a href="${path}">${name}</a>`;

        if (files[i] === active) {
            activeIndex = i;
            li.classList.add("active");
        }

        list.append(li);
    }

    return {
        prev: activeIndex > 0 ? links[activeIndex - 1] : null,
        next: activeIndex < files.length - 1 ? links[activeIndex + 1] : null,
        nav: nav.outerHTML,
    };
}

function createButton(name: string, url: string, next: boolean) {
    const a = document.createElement("a");
    a.href = url;
    const button = Button({
        text: name,
        style: "text",
    });

    a.append(button);

    button.innerHTML =
        (next ? button.innerHTML : "") +
        `<div class="icon">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.0025 21.0025C14.7425 21.0025 14.4925 20.9025 14.2925 20.7125L6.2925 12.7125C5.9025 12.3225 5.9025 11.6925 6.2925 11.3025L14.2925 3.2925C14.6825 2.9025 15.3125 2.9025 15.7025 3.2925C16.0925 3.6825 16.0925 4.3125 15.7025 4.7025L8.4125 11.9925L15.7025 19.2825C16.0925 19.6725 16.0925 20.3025 15.7025 20.6925C15.5025 20.8925 15.2525 20.9825 14.9925 20.9825L15.0025 21.0025Z"
                    fill="currentColor"
                />
            </svg>
        </div>` +
        (next ? "" : button.innerHTML);

    return a.outerHTML;
}
