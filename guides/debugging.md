# Debugging

## Desktop

Use the built-in chrome debugger by hitting MacOS `cmd` + `alt` + `i` and Win/Linux `ctrl` + `shift` + `i`.

## iOS/iPadOS

There is a small console for logs, but no way of inspecting the rendered HTML.

Here's a few possible approach:
* Connect by usb your device to a Mac computer and debug with Safari debugger tool.
![USB Debug](images/usb-debug.jpeg)
 
* Load [eruda](https://github.com/liriliri/eruda) in your app and pop the mobile inspector.
```html
<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>
```
![Eruda](images/eruda.PNG)