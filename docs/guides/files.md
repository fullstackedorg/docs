# Files Structure

You can manage code, assets and files the way you want. But there are few specific files that need more attention.

Here’s an example of a typical FullStacked project file tree

```latex
├ assets
│ ├ font.woff2
│ └ image.png
├ data <= Data directory
│ └ file.json
├ app
├ └ view.jsx
├ index.html <= HTML Entrypoint
├ index.js(x) <= JavaScript Entrypoint
└ index.sa(c)ss <= Sass Entrypoint
```

## JavaScript entrypoint

> FullStacked supports TypeScript. You can use `index.ts(x)` as entrypoint.

If your project contains an `index.js(x)` (or `index.ts(x)`), FullStacked will make sure to bundle this entrypoint before running your project. Meaning you can import modules and libraries from there.

## Sass entrypoint

> Both Sass and SCSS syntax are supported.

When your project grows, basic `css` can feel like not enough. [Sass](https://sass-lang.com) brings a set of features that can really help organize and optimize the styling of your views.

If your project contains an `index.sass` or `index.scss`, FullStacked will make sure to process it before running your project. Meaning you can import other Sass/SCSS files from there.

## HTML entrypoint

The `index.html` file is still the real WebView entrypoint for your project. If you don’t have any, FullStacked will generate on the fly minimal functional `html` content for your project. If you need some extra tags or want to go full raw `html`, you can definitely. Create an `index.html` file and FullStacked will use this as entrypoint. FullStacked will still make sure everything needed is in there, so don’t worry.

## Data directory

This directory is particular because it will not be zipped when you export your project and will always be ignored by git. It is intended to keep persistent data related to the project, but that does not need to be shared.
