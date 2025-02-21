# Platform

If you ever need to modify some style or content based off the current OS running behind, the `platform` module can be very handy.

## Exported Members

```typescript
// defined with the current
default: string

enum Platform {
  NODE    = "node",
  APPLE   = "apple",
  ANDROID = "android",
  WINDOWS = "windows"
  WASM    = "wasm"
}
```

## Example

```typescript
import platform, { Platform } from "platform";

if(platform === Platform.APPLE) {
  console.log("You are on the APPLE platform.");
}
```
