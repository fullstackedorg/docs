 # Using the rpc object

The `rpc` is a function available on the `window` only when you load the built/bundled JavaScript entrypoint.
It's meant to call some native functions. 
The available functions are listed in the References section of those docs.
The returned value is always a `promise`.

## Example

Fetching data and caching it in a local file. 
Then searching in the whole dataset.
```ts
// index.js
import renderTable from "./table.js"

if(!await rpc().fs.exists("data"))
    await rpc().fs.mkdir("data");

const cacheFile = "data/cache.json";

async function loadData() {
    let rawData;
    if (await rpc().fs.exists(cacheFile)) {
      rawData = await rpc().fs.readFile(cacheFile, { encoding: "utf8" });
    } else {
      rawData = await rpc().fetch("https://some.api", { encoding: "utf8" });
      fs.writeFile(cacheFile, rawData);
    }

    return JSON.parse(rawData);
}

const data = await loadData();

const search = (str) => {
    return data.filter(item => item.includes(str));
}

const resultsElement = document.querySelector("#results");
resultsElement.innerHTML = renderTable(data);

document.querySelector("input").addEventListener("keyup", async e => {
  const results = await search(e.currentTarget.value);
  resultsElement.innerHTML = renderTable(results);
});
```