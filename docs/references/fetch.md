# fetch (core_fetch)

You can use a native `fetch` to get some data. It's very useful to go around CORS. The `core_fetch `method is inspired from the [Browser](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and [NodeJS](https://nodejs.org/dist/latest/docs/api/globals.html) ones.

## Method

```typescript
core_fetch: (
  url: string,
  options?: {
    headers?: Record<string, string>;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: string | Uint8Array;
  }
) => Promise<{
    url: string;
    headers: Record<string, string>;
    method: "GET" | "POST" | "PUT" | "DELETE";
    statusCode: number;
    statusMessage: string;
    body: Uint8Array;
  }>;

core_fetch: (
  url: string,
  options?: {
    headers?: Record<string, string>;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: string | Uint8Array;
    encoding: "utf8";
  }
) => Promise<{
    url: string;
    headers: Record<string, string>;
    method: "GET" | "POST" | "PUT" | "DELETE";
    statusCode: number;
    statusMessage: string;
    body: string;
  }>;
```

## Example

```javascript
import fs from "fs";
import core_fetch from "core_fetch";

// define a data file to cache some information
const cacheFile = "data/cache.json";

// if the file exists return it directly
if(await fs.exists(cacheFile))
  return fs.readFile(cacheFile, { encoding: "utf8" });

// fetch an api that block CORS request
const data = await core_fetch("https://api.com", { encoding: "utf8" });

// make it a JS object
const json = JSON.parse(data);

// cache it for later and/or offline use
await fs.writeFile(cacheFile, json);

return json;
```
