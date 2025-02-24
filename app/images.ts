import { InputFile, InputText } from "@fullstacked/ui";
import core_fetch from "fetch";
import slugify from "slugify";
import { loadValue, saveValue } from "./utils";

const authValueFile = "img-auth.txt";

export function Images() {
    const form = document.createElement("form");

    const inputAuth = InputText({
        label: "Auth",
    });
    loadValue(authValueFile).then((v) => (inputAuth.input.value = v));

    const inputFile = InputFile({
        label: "Image",
    });
    inputFile.input.accept = "image/*";

    inputFile.input.onchange = async () => {
        if (inputFile.input.files.length === 0) return;

        const file = inputFile.input.files.item(0);
        const name = slugify(file.name);
        const url = "https://img.fullstacked.org/" + name;

        await core_fetch(url, {
            method: "PUT",
            headers: {
                authorization: "Basic " + btoa(inputAuth.input.value),
            },
            body: new Uint8Array(await file.arrayBuffer()),
        });

        inputFile.input.value = "";
        inputText.input.value = url;

        saveValue(authValueFile, inputAuth.input.value);
    };

    const inputText = InputText({ label: "Image URL" });
    inputText.input.readOnly = true;

    form.append(inputAuth.container, inputFile.container, inputText.container);

    return form;
}
