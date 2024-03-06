 # Files Structure

Here's a example of a typical FullStacked project

```
├ api
│ └ index.js(x) <= API JS entrypoint
├ assets
│ ├ image.png
│ └ index.css
├ data <= Data directory
│ └ file.json
├ index.js(x) <= WebView JS entrypoint
├ index.html
└ page
  └ index.html
  
```

## WebView JS entrypoint

You can always load script files with a simple `<script src="my-script.js">` tag.
Those won't be bundle or transformed. 
If you use the `index.js` of `index.jsx`, this file will be bundled before running your app. 
Meaning you can import modules and libraries.
Sort of like your frontend/client JS part of any single page app (SPA).


Take note that this file MUST be added as `type="module"`
```html
<script type="module" src="index.js"></script>
```

## API JS entrypoint

This file is the one that will be bundle and ran in the Business layer JavaScript context. 
Sort of like the backend/server JS part.
It's meant to abstract some OS-level features like fetching from a place, caching and returning
chunks of data.

You must `export default` your methods in the form of an object. 

```ts
// api/index.js

export default {
  async foo() {
    const rawData = await fetch("https://some.api", { encoding: "utf8" });
    const data = JSON.parse(rawDate);
    fs.writeFile("data/cache.json", rawData);
    return data.slice(0, 10);
  }
}
```
This object will become the `globalThis.userMethods` and be assigned to the already existing methods 
listed in the references setion. They are then accessible by the `rpc` object in the WebView.

### Returning different types of data

Here how each types of JS value will associated with a mime-type

| JS value type | mime-type |
| -------- | ------- |
| `string` | text/plain |
| `Uint8Array` | application/octet-stream |
| `object` | application/json |
| `{ type: string, body: any }` | `$type` |

The last one is very useful for "server" side rendering. 
The following example generates a React SSR view accessible by the WebView at `/page`.
```js
// api/index.jsx
import React from "react";
import { renderToString } from "react-dom/server";
import Layout from "./layout";

export default {
    "page": () => ({
        type: "text/html",
        body: renderToString(<Layout title="Hello World" />)
    })
}
```

## Data directory

This directory is particular because it will not be zipped when you export your app.
It is really intended to just keep your persistent runtime app data which does not need to be shared.