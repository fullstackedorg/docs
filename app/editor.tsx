import React, { useEffect, useState, createRef } from "react";
import { Preview } from "./preview";
import fs from "fs";
import { createCodeMirrorView } from "@fullstacked/codemirror-view";
import { oneDark } from "@codemirror/theme-one-dark";

const cmView = createCodeMirrorView({
    language: "markdown",
    extensions: [oneDark],
});

export function Editor(props: {
    file: string;
    title: string;
    order: number;
    changeOrderTo: (order: number) => void;
    updateTitleTo: (title: string) => void;
}) {
    const [order, setOrder] = useState(props.order);
    const [title, setTitle] = useState(props.title);
    const editorRef = createRef<HTMLDivElement>();

    useEffect(() => {
        let cmView: ReturnType<typeof createCodeMirrorView>;
        
        if (!props.file) {
            setOrder(null);
        } else {
            setTitle(props.title);
            setOrder(props.order);
            fs.readFile(props.file, { encoding: "utf8" }).then((c) => {
                cmView = createCodeMirrorView({
                    contents: c,
                    language: "markdown",
                    extensions: [oneDark],
                });
                cmView.addUpdateListener((contents) =>
                    save(props.file, contents),
                );
                const container = document.querySelector("#editor");
                Array.from(container.children).forEach(c => c.remove());
                document.querySelector("#editor").append(cmView.element);
            });
        }

        return () => {
            cmView?.remove();
        };
    }, [props.file]);

    return (
        <div>
            <div>
                <div className="input-text">
                    <label>Order</label>
                    <input
                        value={order === null ? "" : order}
                        onChange={(e) =>
                            setOrder(parseInt(e.currentTarget.value))
                        }
                    />
                </div>
                <button onClick={() => props.changeOrderTo(order)}>
                    Change
                </button>
            </div>

            <div>
                <div className="input-text">
                    <label>Title</label>
                    <input
                        value={title || ""}
                        onChange={(e) => setTitle(e.currentTarget.value)}
                    />
                </div>
                <button onClick={() => props.updateTitleTo(title)}>
                    Update
                </button>
            </div>

            <div>
                <button onClick={() => Preview(props.file)}>Preview</button>
            </div>

            <div id="editor" />
        </div>
    );
}

const debouncers = new Map<string, ReturnType<typeof setTimeout>>();
function save(file: string, contents: string) {
    let d = debouncers.get(file);
    if (d) {
        clearTimeout(d);
    }
    d = setTimeout(async () => {
        fs.writeFile(file, contents);
        debouncers.delete(file);
    }, 1000);
    debouncers.set(file, d);
}
