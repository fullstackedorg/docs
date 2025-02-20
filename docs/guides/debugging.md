# Debugging

## Desktop

Use the built-in chrome debugger by hitting MacOS `cmd` + `alt` + `i` and Win/Linux `ctrl` + `shift` + `i`.

## iOS/iPadOS

In FullStacked Editor for iOS/iPadOS, there is a small console for logs, but no way of inspecting the rendered HTML.

To do so, connect by usb your device to a Mac computer and debug with the Safari debugger tool.

## Android

1.  Connect your Android device to a computer that has Google Chrome web browser installed.
2.  Run your project on your Android device.
3.  On the computer, open Google Chrome at chrome://inspect.
4.  Select the webview of your running project.
5.  Debug

## Eruda

[Eruda](https://github.com/liriliri/eruda) is a console for mobile browsers. You can load it in your app and use it to inspect and debug.

First install eruda in your project

```shellscript
npm i eruda
```

The` import` and init eruda

```javascript
import eruda from "eruda";
eruda.init();
```

![BlockNote image](/images/eruda.PNG)
