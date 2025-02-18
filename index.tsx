import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import eruda from "eruda";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import fs from "fs";

eruda.init();

function App() {
    const editor = useCreateBlockNote();

    useEffect(() => {
        fs.readFile("README.md", { encoding: "utf8" }).then(async (readme) => {
            editor.replaceBlocks(editor.document, await editor.tryParseMarkdownToBlocks(readme));
        });
    }, []);

    return <BlockNoteView editor={editor} />;
}

const container = document.createElement("div");
document.body.append(container);
createRoot(container).render(<App />);
