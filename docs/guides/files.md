# Files Structure

Here's a example of a typical FullStacked project

```javascript
├ assets
│ ├ image.png
│ └ index.css
├ data <= Data directory
│ └ file.json
├ index.html <= Project Entrypoint
├ index.js(x) <= JS Entrypoint
├ index.sa(c)ss <= Style Entrypoint
└ page
  └ index.html
  
```

## Project entrypoint

Like any web-like project, everything starts with `index.html`. Start here to create a page with some HTML markup. When ready, you can add some style with `link` tags and some javascript with `script` tags.

## JavaScript entrypoint

Since v0.5.0, FullStacked supports TypeScript. You can use `index.ts(x)` as entrypoint.

You can always load script files with a simple `<script src="my-script.js">` tag. Those won't be bundle or transformed.

If your project contains an `index.js(x)` (or `index.ts(x)`), FullStacked will make sure to bundle this entrypoint before running your project. Meaning you can import modules and libraries from there.

Take note that this file **MUST** be added as `type="module"` in your `index.html` file.\
If you use `index.jsx`, you **MUST** still use `index.js` as `src`

```html
<!-- index.html -->
<script type="module" src="index.js"></script>
```

## Style entrypoint

When your project grows, basic `css` can feel like not enough. [Sass](https://sass-lang.com) brings a set of features that can really help organize and optimize the styling of your views.

If your project contains an `index.sass` or `index.scss`, FullStacked will make sure to process it before running your project. Meaning you can import other Sass/SCSS files from there.

Take note that this file **MUST** be added as `index.css` in your `index.html` file.

```html
<!-- index.html -->
<link rel="stylesheet" href="index.css" />
```

## Data directory

This directory is particular because it will not be zipped when you export your project and always be ignored by git. It is really intended to just keep your persistent project data which does not need to be shared.
