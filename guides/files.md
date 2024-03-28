 # Files Structure

Here's a example of a typical FullStacked project

```
├ assets
│ ├ image.png
│ └ index.css
├ data <= Data directory
│ └ file.json
├ index.js(x) <= JS Build Entrypoint
├ index.html <= Web App Entrypoint
└ page
  └ index.html
  
```

## index.html Web App Entrypoint

Like any web-like project, everything starts with `index.html`. 
Start here to create a page with some HTML markup. 
When ready, you can add some style with `link` tags and some javascript with `script` tags.

## index.js(x) JavaScript Entrypoint

You can always load script files with a simple `<script src="my-script.js">` tag.
Those won't be bundle or transformed. 
If you use the `index.js` or `index.jsx`, this file will be bundled before running your app. 
Meaning you can import modules and libraries.

Take note that this file **MUST** be added as `type="module"` in your `index.html` file.  
If you use `index.jsx`, you **MUST** still use `index.js` as `src`
```html
<!-- index.html -->
<script type="module" src="index.js"></script>
```

## Data directory

This directory is particular because it will not be zipped when you export your app.
It is really intended to just keep your persistent runtime app data which does not need to be shared.
It will also be ignored by git.

