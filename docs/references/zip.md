# ZIP (archive)

Utilities to zip and unzip files and directories. You can always zip and unzip a file from the file system or use in memory data in the form of `Uint8Array`.

## Methods

```typescript
type FileEntries: {
  [filePath: string] : {
    isDir: boolean,
    contenst: string | Uint8Array
  }
};

function zip(in: string | FileEntries) : Promise<Uint8Array>;
function zip(in: string | FileEntries, out: string) : Promise<Boolean>;
function zip(in: string, out: null | undefined, skip: string[]) : Promise<Uint8Array>;
function zip(in: string, out: string, skip: string[]) : Promise<Boolean>;

function unzip(in: string | FileEntries) : Promise<FileEntries>;
function unzip(in: string | FileEntries, out: string) : Promise<Boolean>;
```

## Example

```typescript
import archive, { FileEntries } from "archive";
import core_fetch from "core_fetch";

const files: FileEntries = {
  "hello.txt": {
    isDir: false,
    contents: "Hello World"
  },
  "directory": {
    isDir: true,
    contents: null
  },
  "directory/a-nested-file.txt": {
    isDir: false,
    contents: ""
  }
}

const zipData = await archive.zip(files);

core_fetch("https://my.cloud.storage", {
    method: "POST",
    body: zipData
  })
```
