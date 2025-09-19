import { Button, InputText } from "@fullstacked/ui";
import archive from "archive";
import core_fetch from "fetch";
import { loadValue, saveValue } from "./utils";
import { renderSite } from "./render";

const siteAccessValueFile = "site-access.txt";

export function DeployButton() {
    const container = document.createElement("container");

    const siteIdInput = InputText({
        label: "Site ID",
    });

    const tokenInput = InputText({
        label: "Token",
    });

    loadValue(siteAccessValueFile).then((v) => {
        if (!v) return;
        const [siteId, token] = v.split(":");
        siteIdInput.input.value = siteId;
        tokenInput.input.value = token;
    });

    const button = Button({
        text: "Deploy",
    });

    button.onclick = async () => {
        button.disabled = true;
        await Deploy(siteIdInput.input.value, tokenInput.input.value);
        saveValue(
            siteAccessValueFile,
            siteIdInput.input.value + ":" + tokenInput.input.value,
        );
        button.disabled = false;
    };

    container.append(siteIdInput.container, tokenInput.container, button);

    return container;
}

async function Deploy(siteId: string, token: string) {
    const zip = await archive.zip(await renderSite());

    return core_fetch(
        `https://api.netlify.com/api/v1/sites/${siteId}/deploys`,
        {
            body: zip,
            method: "POST",
            headers: {
                "Content-Type": "application/zip",
                Authorization: `Bearer ${token}`,
            },
            encoding: "utf8",
        },
    );
}
