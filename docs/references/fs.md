# File System (fs)

The `fs` methods are very similar to the ones in [NodeJS fsPromises module](https://nodejs.org/api/fs.html). The paths are always relative to the root of your project files.

## Methods

```typescript
export function readFile(path: string): Promise<Uint8Array>;
export function readFile(
  path: string,
  options: {
    encoding: "utf8"
  }
): Promise<string>;

export function writeFile(
  path: string,
  content: string | Uint8Array
): Promise<void>;

export function unlink(path: string): Promise<void>;

export function readdir(path: string): Promise<string[]>;
export function readdir(
  path: string,
  options: {
    withFileTypes
  }
): Promise<{
    name: string,
    isDirectory: boolean
  }[]>;

export function mkdir(path: string): Promise<void>;

export function rmdir(path: string): Promise<void>;

export function exists(path: string): Promise<{ isFile: boolean } | null>;

// semi implemented
export function stat(path: string): Promise<object>;
export function lstat(path: string): Promise<object>;
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
