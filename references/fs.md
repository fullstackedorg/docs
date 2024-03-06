 # File System (fs)

The `fs` methods are very similar to the ones in [NodeJS fsPromises module](https://nodejs.org/api/fs.html).
The paths are always relative to the root of your project files.

## Methods

```ts
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

mkdir(path: string): Promise<void>;

rmdir(path: string): Promise<void>;

exists(path: string): Promise<boolean>;

isFile(path: string): Promise<boolean>;

isDirectory(path: string): Promise<boolean>;

// semi implemented
stat(path: string): Promise<object>;
lstat(path: string): Promise<object>;
```

## Example

```
└ data
  └ file.json
```
```js
await fs.exists("data/file.json") => true
await fs.exists("file.json") => false
await fs.exists("data/some/random/path/file.json") => false
```
