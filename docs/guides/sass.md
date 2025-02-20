# Using Sass

> *[Sass](https://sass-lang.com) is the most mature, stable, and powerful professional grade CSS extension language in the world.*\
> — *Sass Website*

To start using it, simply create a `index.sass` or `index.scss` file at the root of your project and FullStacked will pick it up and process it before running your project.

## Example

Given this kind of directory/subdirectory organization

```javascript
...
├ index.sass
...
├ style
│ ├ components
│ │ ├ button.sass
│ │ ...
│ └ values
│   ├ colors.sass
│   ...
... 
```

Each highlighted files would look something like this

```sass
// index.sass
@import ./style/components/button.sass

html, body
    margin: 0
```

```sass
// style/components/button.sass
@import ../values/colors.sass

.btn
    background-color: $primary
    padding: 20px
    border-radius: 5px
```

```sass
// style/values/colors.sass

$primary: blue
```
