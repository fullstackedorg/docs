 # Using the RPC object

The `rpc` is a function available on the `window` only when you load the WebView JS entrypoint.
It's meant to call your API methods or the ones built-in. 
Once you call the method, a recursive JS proxy will convert your properties getters into a request.
That way you don't have to bother with the fetch syntax and can access OS-level stuff quickly.
Always `await` the function calls on the webview side.

## Example

Fetching data and returning the first 25 elements. Then searching in the whole dataset.
```ts
// api/index.js

const cacheFile = "data/cache.json";
let data;

export default {
  async loadData() {
    let rawData;
    if (fs.exists(cacheFile)) {
      rawData = fs.readFile(cacheFile, { encoding: "utf8" });
    } else {
      rawData = await fetch("https://some.api", { encoding: "utf8" });
      fs.writeFile(cacheFile, rawData);
    }

    data = JSON.parse(rawDate);
    return data.slice(0, 25);
  },
  search(str) {
    return data.filter(item => item.includes(str));
  }
}
```

```ts
// index.js
import renderTable from "./table.js"

const resultsElement = document.querySelector("#results");
const firstElements = await rpc().loadData();
resultsElement.innerHTML = renderTable(firstElements);

document.querySelector("input").addEventListener("keyup", async e => {
  const results = await rpc().search(e.currentTarget.value);
  resultsElement.innerHTML = renderTable(results);
});

```