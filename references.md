# References

The methods described here are available to use in the API JS and 
while using the `rpc` object from the webview JS
```ts
// index.js
const name = await rpc().fs.readfileUTF8("data/my-name.txt");
```

## fs

The file paths are always relative to the project directory

```ts
fs.exists(itemPath: string): boolean

fs.readfile(filename: string): number[] | Uint8Array

fs.readfileUTF8(filename: string): string

fs.putfile(filename: string, contents: number[] | Uin8Array): void

fs.putfileUTF8(filename: string, contents: string): void

fs.readdir(directory: string): { name: string, isDirectory: boolean }[]

fs.rm(itemPath: string): void
```

## fetch

Very useful to go around CORS issues

```ts
fetch.data(url: string, options?: FetchOptions): Promise<number[] | Uint8Array>

fetch.UTF8(url: string, options?: FetchOptions): Promise<string>
```

### FetchOptions

```ts
type FetchOptions = {
  headers?: Record<string, string>,
  method?: "GET" | "POST" | "PUT" | "DELETE",
  body?: string | number[] | Uint8Array 
}
```