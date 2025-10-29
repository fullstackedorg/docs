# Introduction

**Code, Run, Share. Anywhere.**

Create, run and share projects built with web technologies in a fully cross-platform, local-first environment.

![FullStacked](https://files.fullstacked.org/fullstacked.jpg)

## Motivation

Building applications is such a rewarding experience; the modern development landscape provides an abundance of libraries and components that enable rapid, efficient iteration. Running these applications locally on our development machines is typically a smooth, predictable experience. The real point of friction, however, emerges when the goal shifts from local execution to reliable deployment and operation on any other device.

Currently, making an application available beyond our machine primarily involves two well-defined distribution channels:

* App Marketplaces:
    * Apple App Store, Google Play Store, Microsoft Store, Meta Store, etc.
* Public Web Deployment:
    * With a server (AWS, Azure, Google Cloud, Self-Hosted, etc.)
    * Using a web hosting service (CloudFlare, Vercel, Netlify, etc.)
      
While indispensable for broad consumer access, these approaches introduce considerable overhead for projects with more limited scope. For applications intended for personal use or a specific group, navigating developer program costs, arduous review cycles, intricate permissioning, complex pricing and hidden fees often presents a disproportionate burden. This often leads to a fundamental frustration: if development is so efficient, why can’t sharing be equally straightforward? What if the ease of npm start could extend to anywhere? FullStacked is designed precisely to solve this challenge.

## How it works

> This section explains in-depth how FullStacked can run local-first projects anywhere with web technologies. If you are looking for help on how to build a project inside FullStacked, go to the Getting Started page or the Guides section.

There are 4 key components in FullStacked

1. Core

  * Built with GO.

  * Access to native functionalities.

  * Very fast and performant.

  * Handles features like

    * File System

    * Git ([go-git](https://github.com/go-git/go-git))

    * JavaScript Packages management (similar to npm)

    * Code Bundling ([esbuild](https://github.com/evanw/esbuild))
   
    * TypeScript LSP ([typescript-go](https://github.com/microsoft/typescript-go))

    * ZIP Archiving

2. WebView

  * Instead of trying to use OS-specific native UI systems. FullStacked leverages the use of what has been rendering user interfaces for years: the web browser.

  * Every major Operating System has a built-in WebView

    * WKWebView (WebKit) for Apple

    * WebView (Chromium) for Android

    * WebView2 (Edge) for Windows

  * [Some even argue it's better than native rendering.](https://javascript.plainenglish.io/i-replaced-my-native-ios-app-with-a-cross-platform-web-app-and-no-one-noticed-1653901ce244)

3. Adapter

  * OS-specific code that binds the WebView and the Core.

  * Manages the instances of WebViews spawned for the different projects running.

4. Bridge

  * A piece of JavaScript code included in every JavaScript bundle ran by spawned WebViews.

  * It allows projects code and the Core to interact.

Here’s a little schema of how the components are nested in one another.

![FullStacked Components](https://files.fullstacked.org/fullstacked-key-components.png)

The adapter is implemented for every platform supported. It implements a few key elements:

* Loading the Core library and implementing the foreign function interface

  * Implementing the “call”: a function that returns a value

  * Implementing the “callback”: a function passed to the Core allowing it to communicate with the WebViews at any given moment.

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
