# Files Structure

You can manage code, assets and files the way you want. But there are few specific files that need more attention.

Here’s an example of a typical FullStacked project file tree

```wasm
├ assets
│ ├ image.png
│ └ index.css
├ data <= Data directory
│ └ file.json
├ app
├ └ view.jsx
├ index.html <= HTML Entrypoint
├ index.js(x) <= JS Entrypoint
└ index.sa(c)ss <= Sass Entrypoint
```

## JavaScript entrypoint

> FullStacked supports TypeScript. You can use `index.ts(x)` as entrypoint.

You can always load script files with a simple `<script src="my-script.js">` tag. Those won't be bundle or transformed.

If your project contains an `index.js(x)` (or `index.ts(x)`), FullStacked will make sure to bundle this entrypoint before running your project. Meaning you can import modules and libraries from there.

## Sass entrypoint

When your project grows, basic `css` can feel like not enough. [Sass](https://sass-lang.com) brings a set of features that can really help organize and optimize the styling of your views.

If your project contains an `index.sass` or `index.scss`, FullStacked will make sure to process it before running your project. Meaning you can import other Sass/SCSS files from there.

## HTML entrypoint

## Data directory

This directory is particular because it will not be zipped when you export your project and will always be ignored by git. It is intended to keep persistent project data does not need to be shared.
