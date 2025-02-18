# Open in FullStacked

If you use git to version your project, you can easily share your project with a link that will open directly in FullStacked!

## Deep Link

After installing the FullStacked Editor and opening it once, the FullStacked Editor will associate the `fullstacked://` scheme to open in the FullStacked Editor. To open your git repository project, add your git url after this scheme and open it through any browser.

Make sure to use the git repo url ending with `.git`.

```javascript
fullstacked://[git/repo/url.git]

Example:
fullstacked://https://github.com/fullstackedorg/editor-sample-demo.git
```

### Using the npm CLI

If you are using the FullStacked Editor through the npm CLI installation, you can do the same by launching fullstacked with the git repository url as argument.

```shellscript
fullstacked [git/repo/url.git]

or

npx @fullstacked/editor -- [git/repo/url.git]
```

## Share page

If your recipient doesn't have the FullStacked Editor installed beforehand, the `fullstacked://` url will bring them into a dead end. To share your project in a more fashionably, use the <https://share.fullstacked.org> page to send your project deep link. Simply add your git url in the query parameters.

```javascript
https://share.fullstacked.org?git=[git/repo/url.git]

Example:
https://share.fullstacked.org?git=https://github.com/fullstackedorg/editor-sample-demo.git
```

Try it out\
<https://share.fullstacked.org?git=https://github.com/fullstackedorg/editor-sample-demo.git>

## Markdown Button

You can even add an "Open in FullStacked" button to your `README` page to allow people to directly open your project in the FullStacked Editor. To do so, create an image link with the share page url.

```javascript
[![Open in FullStacked]([image/url])](share?git=[git/repo/url.git])

Example:
[![Open in FullStacked](https://share.fullstacked.org/open-in-fullstacked.svg)](https://share.fullstacked.org?git=https://github.com/fullstackedorg/editor-sample-demo.git)
```

Try it out

## Extra parameters

You can also add some extra parameters to make sure sharing your project goes as expected. To add extra parameters, simply add them as query parameters to the git repository url.

```javascript
Deep Link
fullstacked://[git/repo/url.git]?title=Demo

Share Page
https://share.fullstacked.org?git=[git/repo/url.git]?title=Demo
```

### Available parameters

|            |                               |
| ---------- | ----------------------------- |
|            |                               |
|            |                               |
|            |                               |
|            |                               |
|            |                               |
|            |                               |
|            |                               |
|            |                               |
|            |                               |
|            |                               |
| Param Name | default                       |
| `title`    | username/repo-name            |
| `branch`   | repository branch to checkout |
