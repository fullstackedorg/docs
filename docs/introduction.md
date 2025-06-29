# FullStacked - Code, Run, Share. Anywhere.

Create, run and share projects built with web technologies in a fully cross-platform, local-first environment.

![BlockNote image](https://files.fullstacked.org/IMG_0521.jpeg)

## Motivation

Creating and developing applications is a lot of fun, the internet is filled with libraries and components we can build with to quickly make great apps. Everything goes so smoothly when working on our machine, but the moment we want our app to run on another device that’s when the fun starts to fade away...

The two main ways to make your app accessible beyond your own machine are:

* To distribute the app on App Marketplaces.

  * Apple App Store, Google Play Store, Microsoft Store, Meta Store, etc.

* To deploy the app on the publicly accessible Web.

  * With a server (AWS, Azure, Google Cloud, Self-Hosted, etc.)

  * Using a web hosting service (CloudFlare, Vercel, Netlify, etc.)

While these solutions are great to make your app accessible to the general public, they can become insecure and costly for projects you intend to use solely or with a distinct group of people. Developer program fees, days-long app reviews, complexe user management, data transfer fees can all feel counterproductive when your goal is simply to build and run your projects on your own and known people devices. So why can’t we just let others run our app the same way we do on our local machine? What if we could `npm start` anywhere? FullStacked exists to fulfill this use case.

## How it works

> This section explains in-depth how FullStacked runs local-first web-like projects anywhere. If you are looking for help on how to build a project inside FullStacked, go to the Getting Started page or the Guides section.

There are 4 key components in FullStacked

* Core

  * Built with GO and compiled to a C library.

  * Access to native functionalities.

  * Very fast and performant.

  * Handles features like

    * File System

    * Git ([go-git](https://github.com/go-git/go-git))

    * JavaScript Packages management (similar to npm)

    * JavaScript Code Bundling ([esbuild](https://github.com/evanw/esbuild))

    * ZIP Archiving

* WebView

  * Instead of trying to use OS-specific native UI systems. FullStacked leverages the use of what has been rendering user interfaces for years: the web browser.

  * Every major Operating System has a built-in WebView

    * WKWebView (WebKit) for Apple

    * WebView (Chromium) for Android

    * WebView2 (Edge/Chromium) for Windows

  * Some even argue it's better than native rendering.\
    <https://javascript.plainenglish.io/i-replaced-my-native-ios-app-with-a-cross-platform-web-app-and-no-one-noticed-1653901ce244?gi=e8cbda006b4b>

* Adapter

  * OS-specific code that binds the WebView and the Core.

  * Manages the instances of WebViews spawned for the different projects running.

* Bridge

  * A piece of JavaScript code included in every JavaScript bundle ran by spawned WebViews.

  * It allows projects code and the Core to interact.

Here’s a little schema of how the components are nested in one another.

![BlockNote image](https://files.fullstacked.org/fullstacked-key-components.png)

The adapter is implemented for every platform supported. It implements a few key elements:

* Loading the Core C library binary and implementing the foreign function interface with it

  * Implementing the “call”: a function that returns a value

  * Implementing the “callback”: a function passed to the Core allowing it to communicate with the WebView at any given moment.

* Handles the WebViews spawning and management

### Platform-Specific Implementations

* Apple

  * Adapter: [Swift](https://developer.apple.com/swift/)

  * WebView: [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) (WebKit)

  * Bridge: [WKScriptMessageHandler](https://developer.apple.com/documentation/webkit/wkscriptmessagehandler)

* Android

  * Adapter: [Kotlin](https://kotlinlang.org)

  * WebView: [WebView](https://developer.android.com/reference/android/webkit/WebView) (Chromium)

  * Bridge: [JavascriptInterface](https://developer.android.com/reference/android/webkit/JavascriptInterface)

* Windows

  * Adapter: [C#](https://learn.microsoft.com/en-us/dotnet/csharp/)

  * WebView: [WebView2](https://learn.microsoft.com/en-us/microsoft-edge/webview2/webview2-api-reference?tabs=dotnetcsharp) (Chromium)

  * Bridge: [WebMessageReceived](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.winforms.webview2.webmessagereceived?view=webview2-dotnet-1.0.2903.40)

* Linux GTK

  * Adapter: [C++](https://cplusplus.com)

  * WebView: [WebKitGTK](https://webkitgtk.org) (WebKit)

  * Bridge: [script_message_handler](https://webkitgtk.org/reference/webkitgtk/stable/method.UserContentManager.register_script_message_handler.html)

* Linux Qt

  * Adapter: [C++](https://cplusplus.com)

  * WebView: [Qt WebEngine](https://doc.qt.io/qt-6/qtwebengine-index.html) (Chromium)

  * Bridge: [Qt WebChannel](https://doc.qt.io/qt-6/qtwebchannel-index.html)

* WebAssembly (WASM)

  * Adapter: [JavaSript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

  * WebView: [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)

  * Bridge: [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

* NodeJS

  * Adapter: [JavaScript](https://nodejs.org/en) with [node-addon-api](https://github.com/nodejs/node-addon-api)

  * WebView: Default Browser

  * Bridge: [WebSocket](https://www.npmjs.com/package/ws)

* Electron

  * Adapter: [JavaScript](https://nodejs.org/en) with [node-addon-api](https://github.com/nodejs/node-addon-api) (uses NodeJS implementation)

  * WebView: [BrowserWindow](https://www.electronjs.org/docs/latest/api/browser-window) (Chromium)

  * Bridge: [Inter-Process Communication](https://www.electronjs.org/docs/latest/tutorial/ipc)
