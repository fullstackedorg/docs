# FullStacked Compared to Other Tools

## vs PWA

Progressive Web Apps are very close to what you'll build in FullStacked.
Although, adding a project to FullStacked is through git or offline processes, 
meaning your projects are not exposed to the public internet.
Also, FullStacked provides an easy access to native functionalities like the file system and a native fetch (no CORS).


## vs React-Native, Flutter

The goal of those frameworks is to translate to OS-specific native features. 
FullStacked is more of an environment that provides those features and gives a universal way to access them from a webview.
In other words, RN/Flutter translates your codebase when built/compiled vs FullStacked is a prebuilt environment ready to run web-like apps.

## vs Electron, Tauri, Neutralinojs

Those frameworks are designed to pack your JavaScript code with a webview and a JS engine. 
FullStacked provides those two exact components with a code editor and a code bundler. 
Meaning, all you have left to do is build and run projects inside FullStacked, no need to pack anything else.

## vs Replit, StackBlitz, Codespaces, CodeSandbox

Those development tools are IDEs intended to essentially make coding more accessible. 
This is also part of FullStacked goals, but FullStacked has also the goal to provide a place to run your projects.
While some of those tools provides offline features, they are still for the most part working with a remote server.
FullStacked has and will always have an offline-first/local-first approach.
