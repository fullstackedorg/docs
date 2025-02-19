import { Button } from "@fullstacked/ui";
import fs from "fs";

export function DeployButton() {
    const button = Button({
        text: "Deploy"
    });

    button.onclick = () => Deploy()

    return button
}

const outDir = "data/out";

async function Deploy(){
    if(await fs.exists(outDir)) {
        await fs.rmdir(outDir)
    }
    await fs.mkdir(outDir);

    
}