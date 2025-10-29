# Platform

The current platform identifier is always available from the `platform` module encoded as a simple string.

## Exported Members

```typescript
// defined with the current platform
export default: string

export enum Platform {
    NODE = "node",
    APPLE = "apple",
    ANDROID = "android",
    DOCKER = "docker",
    WINDOWS = "windows",
    WASM = "wasm",
    LINUX_GTK = "linux-gtk",
    LINUX_QT = "linux-qt",
    ELECTRON = "electron"
}
```

## Example

```typescript
import platform, { Platform } from "platform";

if (platform === Platform.APPLE) {
    console.log("You are on the APPLE platform.");
}
```
