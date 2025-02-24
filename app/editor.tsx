import React, { useEffect, useState } from "react";
import {
    getDefaultReactSlashMenuItems,
    SuggestionMenuController,
    useCreateBlockNote,
} from "@blocknote/react";
import fs from "fs";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Block, filterSuggestionItems } from "@blocknote/core";
import { insertQuote, schema } from "./blockquote/quote";
import { Preview } from "./preview";

export function Editor(props: {
    file: string;
    title: string;
    order: number;
    changeOrderTo: (order: number) => void;
    updateTitleTo: (title: string) => void;
}) {
    const [order, setOrder] = useState(props.order);
    const [title, setTitle] = useState(props.title);

    const editor = useCreateBlockNote({ schema });

    useEffect(() => {
        if (!props.file) {
            setOrder(null);
            editor.replaceBlocks(editor.document, []);
        } else {
            setTitle(props.title);
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

            <BlockNoteView
                editor={editor}
                onChange={() => {
                    save(props.file, [...editor.document], (b) =>
                        editor.blocksToMarkdownLossy(b),
                    );
                }}
                slashMenu={false}
            >
                <SuggestionMenuController
                    triggerCharacter={"/"}
                    getItems={async (query) =>
                        filterSuggestionItems(
                            [
                                ...getDefaultReactSlashMenuItems(editor),
                                insertQuote(editor),
                            ],
                            query,
                        )
                    }
                />
            </BlockNoteView>
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
