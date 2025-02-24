# File System (fs)

The `fs` methods are very similar to the ones in [NodeJS fsPromises module](https://nodejs.org/api/fs.html). The paths are always relative to the root of your project files.

## Methods

```typescript
fs.readFile(path: string): Promise<Uint8Array>
fs.readFile(
  path: string,
  options: {
    encoding: "utf8"
  }
): Promise<string>

fs.writeFile(
  path: string,
  content: string | Uint8Array
): Promise<void>

fs.unlink(path: string): Promise<void>

fs.readdir(path: string): Promise<string[]>
fs.readdir(
  path: string,
  options: {
    withFileTypes
  }
): Promise<{
    name: string,
    isDirectory: boolean
  }[]>

fs.mkdir(path: string): Promise<void>;

fs.rmdir(path: string): Promise<void>;

fs.exists(path: string): Promise<{ isFile: boolean } | null>;

// semi implemented
fs.stat(path: string): Promise<object>;
fs.lstat(path: string): Promise<object>;
```

## Example

```javascript
└ data
  └ file.json
```

```javascript
import fs from "fs";

await fs.exists("data/file.json") => true
await fs.exists("file.json") => false
await fs.exists("data/some/random/path/file.json") => false
```
