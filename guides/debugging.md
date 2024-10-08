# Debugging

## Desktop

Use the built-in chrome debugger by hitting MacOS `cmd` + `alt` + `i` and Win/Linux `ctrl` + `shift` + `i`.

## iOS/iPadOS

In FullStacked Editor for iOS/iPadOS, there is a small console for logs, 
but no way of inspecting the rendered HTML.

To do so, connect by usb your device to a Mac computer and debug with the Safari debugger tool.
![USB Debug](/images/usb-debug.jpeg)
 

## Android

1. Connect your Android device to a computer that has Google Chrome web browser installed.

2. Run your project on your Android device.  
![Debug Android](/images/debugging/debug-android-phone.png)
3. On the computer, open Google Chrome at [chrome://inspect](chrome://inspect).
4. Select the webview of your running project.
![Debug Android Chrome](/images/debugging/debug-android-chrome.png)
5. Debug
![Debug Android Inspector](/images/debugging/debug-android-chrome-inspector.png)


## Eruda

[Eruda](https://github.com/liriliri/eruda) is a console for mobile browsers.
You can load it in your app and use it to inspect and debug.

Simply add the following line to your project entrypoint.
```html
<!-- index.html -->
<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>
```
![Eruda](/images/eruda.PNG)
