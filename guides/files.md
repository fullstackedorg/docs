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

## JS Build Entrypoint

You can always load script files with a simple `<script src="my-script.js">` tag.
Those won't be bundle or transformed. 
If you use the `index.js` or `index.jsx`, this file will be bundled before running your app. 
Meaning you can import modules and libraries.
Sort of like your frontend/client JS part of any single page app (SPA).


Take note that this file MUST be added as `type="module"`
```html
<script type="module" src="index.js"></script>
```

## Data directory

This directory is particular because it will not be zipped when you export your app.
It is really intended to just keep your persistent runtime app data which does not need to be shared.
It will also always be ignored by git.

