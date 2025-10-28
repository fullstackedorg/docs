import { renderSite } from "./render";
import wb from "winbox/src/js/winbox";
import "winbox/dist/css/winbox.min.css";

export async function Preview(page: string) {
    const site = await renderSite(page);
    const renderedPageKey = Object.keys(site).find((p) =>
        p.endsWith("index.html"),
    );
    const renderedPage = site[renderedPageKey];
    const iframe = document.createElement("iframe");
    new wb(page, {
        height: window.innerHeight,
        width: window.innerWidth,
        mount: iframe,
    });
    iframe.contentDocument.write(renderedPage.contents);
}
