 # File System (fs)

The `fs` methods are very similar to the ones in [NodeJS fsPromises module](https://nodejs.org/api/fs.html).
The paths are always relative to the root of your project files.

## Methods

```ts
rpc().fs.readFile(path: string): Promise<Uint8Array>

rpc().fs.readFile(
  path: string,
  options: {
    encoding: "utf8"
  }
): Promise<string>

rpc().fs.writeFile(
  path: string,
  content: string | Uint8Array
): Promise<void>

rpc().fs.unlink(path: string): Promise<void>

rpc().fs.readdir(path: string): Promise<string[]>

rpc().fs.readdir(
  path: string,
  options: {
    withFileTypes
  }
): Promise<{
    name: string,
    isDirectory: boolean
  }[]>

rpc().fs.mkdir(path: string): Promise<void>;

rpc().fs.rmdir(path: string): Promise<void>;

rpc().fs.exists(path: string): Promise<boolean>;

// semi implemented
rpc().fs.stat(path: string): Promise<object>;
rpc().fs.lstat(path: string): Promise<object>;
```

## Example

```
└ data
  └ file.json
```
```js
await rpc().fs.exists("data/file.json") => true
await rpc().fs.exists("file.json") => false
await rpc().fs.exists("data/some/random/path/file.json") => false
```
