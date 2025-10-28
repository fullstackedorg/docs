import { renderSite } from "./render";
import wb from "winbox/src/js/winbox";
import "winbox/dist/css/winbox.min.css";
import fs from "fs";

export async function Preview(page: string) {
    const site = await renderSite(page);
    console.log(site);
    const [renderedPageKey] = Object.entries(site).find(
        ([p, { docsFile }]) => docsFile === page,
    );
    const renderedPage = site[renderedPageKey];

    const contentSearchURL = URL.createObjectURL(
        new Blob([site["search.json"].contents], { type: "application/json" }),
    );

    const fuseJsURL = URL.createObjectURL(
        new Blob([await fs.readFile("assets/fuse.js", { encoding: "utf8" })], {
            type: "text/javascript",
        }),
    );

    const iframe = document.createElement("iframe");
    new wb(page, {
        height: window.innerHeight,
        width: window.innerWidth,
        mount: iframe,
    });

    iframe.contentDocument.write(`<script src="${fuseJsURL}"></script>`);
    iframe.contentDocument.write(
        `<script>window.contentSearchURL = "${contentSearchURL}";</script>`,
    );
    iframe.contentDocument.write(renderedPage.contents);
}
