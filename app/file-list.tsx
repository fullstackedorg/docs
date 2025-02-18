import React from "react";

export function FileList(props: {
    files: string[];
    activeFile: string;
    didSelectFile: (file: string) => void;
}) {
    

    return (
        <ul>
            {props.files.map((f) => (
                <li
                    key={f}
                    className={f === props.activeFile ? "active" : ""}
                    onClick={() => props.didSelectFile(f)}
                >
                    {f}
                </li>
            ))}
        </ul>
    );
}
