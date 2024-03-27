# FullStacked Editor

Build and run JavaScript web apps on any platform.

![FullStacked Editor Mockup](images/fullstacked-editor-mockup.jpeg)

## Motivation

Building applications is so much fun. But deployment and distribution is way less.
There are 2 major ways to distribute an app nowadays:

* Make the app available on App Marketplaces (Apple App Store, Google Play Store, Microsoft Store, Meta Store, etc.)

or

* Deploy on the public web
    * Hosting a web server with a cloud provider (AWS, Azure, Google, etc.) or your own
    * Using a hosting service (CloudFlare, Vercel, Netlify, etc.)

Both cases brings tedious tasks like apps reviews or needing to build out of scope functionalities like logins, rate limiters, cache busters, etc.
What if we just want to use our quick and small JavaScript app throughout all of our devices without the need to go through any of that?

This project aims to provide a way to build at a very high pace and run full-stack web applications on any device.


## How it works

> This section explains in-depth how FullStacked is able to easily run full-stack JS web apps anywhere.  
> If you are looking for help on how to build an app inside FullStacked, go over the Guides section.

There are 3 key components in FullStacked

* WebView
  * Let's take advantage of what has been rendering interfaces for years: the web browser.  
    Some even argue it's better than native rendering.   
    [I Replaced My Native iOS App with a Cross-Platform Web App and No One Noticed](https://medium.com/javascript-in-plain-english/i-replaced-my-native-ios-app-with-a-cross-platform-web-app-and-no-one-noticed-1653901ce244)
* [esbuild](https://esbuild.github.io)
  * An incredibly fast bundler to merge into one file (to bundle) all of your messy JS files.
  * It also transforms JSX and TypeScript into JS
* Adapter
  * A piece of code that translates the JavaScript OS-level calls to the platform behind.

Here's an example of how these components interact

![Sequence](images/sequence.png)

This architecture is thought to make it as easy as possible to implement it onto any kind of device.

## FullStacked vs PWA

## FullStacked vs React-Native/Flutter

## FullStacked vs Electron/Tauri/Neutralinojs
