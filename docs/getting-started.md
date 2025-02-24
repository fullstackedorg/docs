# Getting Started

## Creating your first project

Locate the `+` icon to create add a new project.

![BlockNote image](https://img.fullstacked.org/IMG_0525.png)

For this first project, select `Create empty project`.

![BlockNote image](https://img.fullstacked.org/IMG_0526.png)

Add a title, and let the identifier generate itself.

![BlockNote image](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.01.55-AM.png)

Congratulation! You just created your first FullStacked project. Select it to start editing and running it.

![BlockNote image](https://img.fullstacked.org/IMG_0529.png)

Try the run button to see what happens.

![BlockNote image](https://img.fullstacked.org/IMG_0527.png)![BlockNote image](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.02.24-AM.png)

As you can expect, an empty page. Now let's add some stuff in the next section.

## Editing the JavaScript entrypoint

Create a new `index.js` file.

![BlockNote image](https://img.fullstacked.org/IMG_0528.png)![BlockNote image](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.02.42-AM.png)

Create an element, add some text and append it to the body. Then re-run your project.

![BlockNote image](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.03.44-AM.png)

```javascript
// index.js
const main = document.createElement("main");
main.innerText = "Hello World";
document.body.append(main);
```

![BlockNote image](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.03.49-AM.png)

Cool! We got some text displayed. Now let's give it some style in the next section.

## Editing the Sass entrypoint

This time create an `index.scss` file and add some styling to your elements. Then re-run your project.

![BlockNote image](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.05.33-AM.png)

```scss
// index.scss
html, body {
  height: 100%;
  width: 100%;
  font-family: sans-serif;
  background-color: royalblue;
  color: white;

  main {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
```

![BlockNote image](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.05.38-AM.png)

Great! That's looks pretty nice. From there, you can build entire interfaces. To learn about other cool features, continue in the guides section.

## Editing the HTML entrypoint

Creating and editing an `index.html` file is totally **optional**. If you'd like to add some elements directly from the html, you can always do so.

![BlockNote image](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.06.14-AM.png)

```javascript
<html>
  <head></head>
  <body>
    <h1>My first project</h1>
  </body>
</html>
```

![BlockNote image](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.06.24-AM.png)
