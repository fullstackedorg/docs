# FullStacked - Code, Run, Share. Anywhere.

Create, run and share projects built with web techologies in a fully cross-platform, portable environment.

## Motivation

Creating and developing applications is a lot of fun, the internet is filled with libraries and components we can build with to quickly make great apps. Everything goes so smoothly when working on our machine, but the moment we want the app to run on another device—or someone else's— that’s when the fun starts to fade away.

The two main ways to make your app accessible beyond your own machine are:

*   To distribute the app on App Marketplaces.

    *   Apple App Store, Google Play Store, Microsoft Store, Meta Store, etc.

*   To deploy the app on the publicly accessible Web.

    *   With a server (AWS, Azure, Google Cloud, Self-Hosted, etc.)
    *   Using a web hosting service (CloudFlare, Vercel, Netlify, etc.)

While these solutions are great to make your app accessible to the general public, they can become insecure and costly for projects you intend to use solely or with a distinct group of people. Developer program fees, days-long app reviews, complexe user management, data transfer fees can all feel counterproductive when your goal is simply to build and run your projects on your own and known people devices. So why can’t we just run our app the same way we do on our local machine? What if we could let peple run `npm start` anywhere? That’s why I created FullStacked.

— cplepage

## How it works

> This section explains in-depth how FullStacked runs local-first web-like projects anywhere. If you are looking for help on how to build a project inside FullStacked, go to the Getting Started page or the Guides section.

There are 4 key components in FullStacked

*   Core

    *   Built with GO and compiled to C library.

    *   Access to native functionalities.

    *   Very fast and performant.

    *   Handles features like

        *   File System
        *   Git (go-git)
        *   JavaScript Packages management (similar to npm)
        *   JavaScript Code Bundling (esbuild)
        *   ZIP Archiving

*   WebView

    *   Instead of trying to use os-specific native UI systems. FullStacked leverages the use of what has been rendering user interfaces for year: the web browser.

    *   Every major Operating System has a built-in WebView

        *   WKWebView (WebKit) for Apple
        *   WebView (Chromium) for Android
        *   WebView2 (Edge/Chromium) for Windows

    *   Some even argue it's better than native rendering: <https://javascript.plainenglish.io/i-replaced-my-native-ios-app-with-a-cross-platform-web-app-and-no-one-noticed-1653901ce244?gi=e8cbda006b4b>

*   Adapter

    *   Piece of OS-specific code that will bind the communication between the WebView and the Core.
    *   Manages the windows spawned for the different running projects.

*   Bridge

    *   A piece of JavaScript code always include in every WebView spawned.
    *   It allows projects code and the Core to interact.

### Implementations on different platforms

*   Apple
*   Android
*   Windows
*   WebAssembly (WASM)
*   NodeJS
