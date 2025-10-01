import { InputFile, InputText } from "@fullstacked/ui";
import core_fetch from "fetch";
import slugify from "slugify";
import { loadValue, saveValue } from "./utils";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const authValueFile = "img-auth.txt";

export function Images() {
    const form = document.createElement("div");
    form.classList.add("form");

    const inputAuth = InputText({
        label: "Auth",
    });
    loadValue(authValueFile).then((v) => (inputAuth.input.value = v));

    const inputFile = InputFile({
        label: "Image",
    });
    inputFile.input.accept = "image/*";
    inputFile.input.multiple = true;

    inputFile.input.onchange = async () => {
        if (inputFile.input.files.length === 0) return;

        const [accountId, accessKeyId, secretAccessKey, bucket] =
            inputAuth.input.value.split(":");

        const S3 = new S3Client({
            region: "auto",
            endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
            credentials: {
                accessKeyId,
                secretAccessKey,
            },
        });

        const files = inputFile.input.files;
        console.log("Uploading " + files.length + " files");
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i);
            try {
                const key = await uploadFile(S3, bucket, file);
                inputText.input.value = "https://files.fullstacked.org/" + key;
                console.log(`Uploaded ${i + 1} of ${files.length}`);
            } catch (e) {
                console.log(`Failed upload ${i + 1} [${file.name}] ${e}`);
            }
        }

        inputFile.input.value = "";
        saveValue(authValueFile, inputAuth.input.value);
    };

    const inputText = InputText({ label: "Image URL" });
    inputText.input.readOnly = true;

    form.append(inputAuth.container, inputFile.container, inputText.container);

    return form;
}

async function uploadFile(
    S3: S3Client,
    Bucket: string,
    file: File,
): Promise<string> {
    const Key = slugify(file.name);

    const restoreFetch = fetchFixture();
    await S3.send(
        new PutObjectCommand({
            ContentType: file.type,
            Bucket,
            Key,
            Body: new Uint8Array(await file.arrayBuffer()),
        }),
    );
    restoreFetch();

    return Key;
}

const headersToObject = (h: Headers) => {
    const obj = {};
    for (const [n, v] of h.entries()) {
        obj[n] = v;
    }
    return obj;
};
const objectToHeaders = (o: Record<string, string>) => {
    const headers = new Headers();
    Object.entries(o).forEach(([n, v]) => {
        headers.set(n, v);
    });
    return headers;
};

function fetchFixture() {
    const originalFetch = globalThis.fetch;
    (globalThis as any).fetch = async function (request: Request) {
        const body = (await request.body.getReader().read()).value;

        const r = await core_fetch(request.url, {
            method: request.method as any,
            headers: headersToObject(request.headers),
            body,
        });
        const generateResponse = () => {
            const blob = new Blob([r.body]);
            const response: Response = {
                url: request.url,
                redirected: false,
                type: "default",
                bodyUsed: false,
                body: blob.stream(),
                ok: r.statusCode <= 299,
                status: r.statusCode,
                statusText: r.statusMessage,
                headers: objectToHeaders(r.headers),
                clone: generateResponse,
                blob: async () => blob,
                arrayBuffer: blob.arrayBuffer,
                bytes: async () => r.body,
                text: async () => new TextDecoder().decode(r.body),
                json: async () => JSON.parse(new TextDecoder().decode(r.body)),
                formData: async () => null,
            };
            return response;
        };

        return generateResponse();
    };
    return () => (globalThis.fetch = originalFetch);
}
