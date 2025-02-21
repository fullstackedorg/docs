# Open in FullStacked

If you use git to version your project, you can easily share your project with a link that will opens directly in FullStacked!

## Deep Link

FullStacked associates the `fullstacked://` scheme to open projects directly in FullStacked. Simply add your git url after this scheme and open it through any browser.

Make sure to use the git repo url ending with `.git`.

```wasm
fullstacked://[git/repo/url.git]

Example:
fullstacked://https://github.com/fullstackedorg/editor-sample-demo.git
```

## Share page

If your recipient doesn't have the FullStacked installed beforehand, the `fullstacked://` url will bring them into a dead end. To share your project in a more fashionably way, use the <https://share.fullstacked.org> page to send your project deep link. Simply add your git url in the query parameters.

```javascript
https://share.fullstacked.org?git=[git/repo/url.git]

Example:
https://share.fullstacked.org?git=https://github.com/fullstackedorg/editor-sample-demo.git
```

Try it out\
[https://share.fullstacked.org?git=https://github.com/fullstackedorg/demo.git](https://share.fullstacked.org?git=https://github.com/fullstackedorg/editor-sample-demo.git)

## Markdown Button

You can even add an "Open in FullStacked" button to your `README` page to allow people to directly open your project in FullStacked. To do so, create an image link with the share page url.

```javascript
[![Open in FullStacked]([image/url])](share?git=[git/repo/url.git])

Example:
[![Open in FullStacked](https://share.fullstacked.org/open-in-fullstacked.svg)](https://share.fullstacked.org?git=https://github.com/fullstackedorg/demo.git)
```

Try it out

![BlockNote image](https://share.fullstacked.org/open-in-fullstacked.svg)
