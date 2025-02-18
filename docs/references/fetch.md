# fetch

You can use a native `fetch` to get some data. It's very useful to go around CORS. The `fetch` method is inspired from the [Browser](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and [NodeJS](https://nodejs.org/dist/latest/docs/api/globals.html) ones.

## Method

```typescript
rpc().fetch: (
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

rpc().fetch: (
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
// define a data file to cache some information
const cacheFile = "data/cache.json";

// if the file exists return it directly
if(await rpc().fs.exists(cacheFile))
  return rpc().fs.readFile(cacheFile, { encoding: "utf8" });

// fetch an api that block CORS request
const data = await rpc().fetch("https://api.com", { encoding: "utf8" });

// make it a JS object
const json = JSON.parse(data);

// cache it for later and/or offline use
await rpc().fs.writeFile(cacheFile, json);

return json;
```
