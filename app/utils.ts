import fs from "fs";

export async function loadValue(file: string): Promise<string> {
    const path = "data/" + file;
    if (!(await fs.exists(path))) {
        return "";
    }

    return fs.readFile(path, { encoding: "utf8" });
}

export async function saveValue(file: string, value: string) {
    if (!(await fs.exists("data"))) {
        await fs.mkdir("data");
    }

    return fs.writeFile("data/" + file, value);
}
