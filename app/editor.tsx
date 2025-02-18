import React, { useEffect, useState } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import fs from "fs";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Block } from "@blocknote/core";

export function Editor(props: {
    file: string;
    order: number;
    changeOrderTo: (order: number) => void;
}) {
    const [order, setOrder] = useState(props.order);

    const editor = useCreateBlockNote();

    useEffect(() => {
        if (!props.file) {
            setOrder(null);
            editor.replaceBlocks(editor.document, []);
        } else {
            setOrder(props.order);
            fs.readFile(props.file, { encoding: "utf8" }).then(async (c) => {
                editor.replaceBlocks(
                    editor.document,
                    await editor.tryParseMarkdownToBlocks(c),
                );
            });
        }
    }, [props.file]);

    return (
        <div>
            <div className="input-text">
                <label>Order</label>
                <input
                    value={order === null ? "" : order}
                    onChange={(e) => setOrder(parseInt(e.currentTarget.value))}
                />
            </div>
            <button onClick={() => props.changeOrderTo(order)}>Change</button>

            <BlockNoteView
                editor={editor}
                onChange={() => {
                    save(props.file, [...editor.document], (b) =>
                        editor.blocksToMarkdownLossy(b),
                    );
                }}
            />
        </div>
    );
}

const debouncers = new Map<string, ReturnType<typeof setTimeout>>();
function save(
    file: string,
    blocks: Block<any>[],
    toMd: (arg: Block<any>[]) => Promise<string>,
) {
    let d = debouncers.get(file);
    if (d) {
        clearTimeout(d);
    }

    d = setTimeout(async () => {
        const md = await toMd(blocks);
        fs.writeFile(file, md);
        debouncers.delete(file);
    }, 1000);
    debouncers.set(file, d);
}
