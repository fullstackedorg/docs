import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { FileList } from "./app/file-list";
import { Editor } from "./app/editor";
import { Images } from "./app/images";
import fs from "fs";
import { DeployButton } from "./app/deploy";
const docsDirectory = "docs";

document.title = "FullStacked Docs"

function App() {
    const [files, setFiles] = useState([] as string[]);
    const [titles, setTitles] = useState({} as { [path: string]: string });
    const [activeFile, setActiveFile] = useState(null as string);

    useEffect(() => {
        Promise.all([getOrder(), getDocsFiles(), getTitles()]).then(
            ([order, files, titles]) => {
                // remove item in order that doesnt exists
                order = order.filter((f) => files.includes(f));

                // remove item iin files that we already have in order
                // push the rest at the end of order list
                files
                    .filter((f) => !order.includes(f))
                    .forEach((f) => order.push(f));

                setFiles(order);

                setTitles(titles);
            },
        );
    }, []);

    const changeOrder = (order: number) => {
        const oldOrder = files.indexOf(activeFile);
        files.splice(oldOrder, 1);
        files.splice(order, 0, activeFile);
        setFiles([...files]);
        fs.writeFile("order.json", JSON.stringify(files, null, 4));
    };

    const updateTitle = (title: string) => {
        titles[activeFile] = title;
        setTitles({ ...titles });
        fs.writeFile("titles.json", JSON.stringify(titles, null, 4));
    };

    return (
        <main>
            <FileList
                files={files}
                activeFile={activeFile}
                didSelectFile={setActiveFile}
            />
            <Editor
                file={activeFile}
                title={titles[activeFile]}
                order={files.indexOf(activeFile)}
                changeOrderTo={changeOrder}
                updateTitleTo={updateTitle}
            />
        </main>
    );
}

export async function getOrder(): Promise<string[]> {
    return JSON.parse(await fs.readFile("order.json", { encoding: "utf8" }));
}

async function getDocsFiles(): Promise<string[]> {
    const items = await fs.readdir(docsDirectory, {
        recursive: true,
        withFileTypes: true,
    });
    return items
        .filter(({ isDirectory }) => !isDirectory)
        .map(({ name }) => docsDirectory + "/" + name);
}

export async function getTitles() {
    return JSON.parse(await fs.readFile("titles.json", { encoding: "utf8" }));
}

const container = document.createElement("div");
document.body.append(Images(), DeployButton());
document.body.append(container);
createRoot(container).render(<App />);
