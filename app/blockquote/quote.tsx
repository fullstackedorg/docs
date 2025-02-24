import React from "react";
import {
    BlockNoteSchema,
    defaultBlockSpecs,
    defaultProps,
    insertOrUpdateBlock,
} from "@blocknote/core";
import { FaQuoteRight } from "react-icons/fa";
import { createReactBlockSpec } from "@blocknote/react";

const Quote = createReactBlockSpec(
    {
        type: "quote",
        propSchema: {
            textAlignment: defaultProps.textAlignment,
            textColor: defaultProps.textColor,
        },
        content: "inline",
    },
    {
        parse: (element) => {
            if (element instanceof HTMLQuoteElement) {
                return {};
            }
        },
        render: (props) => {
            return (
                <blockquote className={"quote"}>
                    <div className={"inline-content"} ref={props.contentRef} />
                </blockquote>
            );
        },
    },
);

export const schema = BlockNoteSchema.create({
    blockSpecs: {
        ...defaultBlockSpecs,
        quote: Quote,
    },
});

export const insertQuote = (editor: typeof schema.BlockNoteEditor) => ({
    title: "Quote",
    onItemClick: () => {
        insertOrUpdateBlock(editor, {
            type: "quote",
        });
    },
    group: "Others",
    icon: <FaQuoteRight />,
});
