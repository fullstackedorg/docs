# Getting Started

## Creating your first project

Locate the `+` icon to create add a new project.

![IMG\_0525.png](https://img.fullstacked.org/IMG_0525.png)

For this first project, select `Create empty project`.

![IMG\_0526.png](https://img.fullstacked.org/IMG_0526.png)

Add a title, and let the identifier generate itself.

![Screenshot-2025-02-23-at-10.01.55-AM.png](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.01.55-AM.png)

Congratulation! You just created your first FullStacked project. Select it to start editing and running it.

![IMG\_0529.png](https://img.fullstacked.org/IMG_0529.png)

Try the run button to see what happens.

![IMG\_0527.png](https://img.fullstacked.org/IMG_0527.png)![Screenshot-2025-02-23-at-10.02.24-AM.png](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.02.24-AM.png)

An empty project as expected. Now let's add some stuff in the next section.

## Editing the JavaScript entrypoint

Create a new `index.js` file.

![IMG\_0528.png](https://img.fullstacked.org/IMG_0528.png)![Screenshot-2025-02-23-at-10.02.42-AM.png](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.02.42-AM.png)

Create an element, add some text and append it to the body. Then re-run your project.

![Screenshot-2025-02-23-at-10.03.44-AM.png](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.03.44-AM.png)

```javascript
// index.js
const main = document.createElement("main");
main.innerText = "Hello World";
document.body.append(main);
```

![Screenshot-2025-02-23-at-10.03.49-AM.png](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.03.49-AM.png)

Cool! We got some text displayed. Now let's give it some style in the next section.

## Editing the Sass entrypoint

This time create an `index.scss` file and add some styling to your elements. Then re-run your project.

![Screenshot-2025-02-23-at-10.05.33-AM.png](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.05.33-AM.png)

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

![Screenshot-2025-02-23-at-10.05.38-AM.png](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.05.38-AM.png)

Great! That's looks pretty nice. From there, you can build entire interfaces. To learn about other cool features, continue in the guides section.

## Editing the HTML entrypoint

Creating and editing an `index.html` file is totally **optional**. If you'd like to add some elements directly from the html, you can always do so.

![Screenshot-2025-02-23-at-10.06.14-AM.png](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.06.14-AM.png)

```javascript
<html>
  <head></head>
  <body>
    <h1>My first project</h1>
  </body>
</html>
```

![Screenshot-2025-02-23-at-10.06.24-AM.png](https://img.fullstacked.org/Screenshot-2025-02-23-at-10.06.24-AM.png)
