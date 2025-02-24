# Debugging

## MacOS, iOS and iPadOS

> Make sure you have `Show features for web developers` checked in Safari on your Apple computer. <https://developer.apple.com/documentation/safari-developer-tools/enabling-developer-features>

1.  Connect your iOS or iPadOS device by USB to your Apple computer.
2.  Run your project in FullStacked on your Apple device.
3.  On the computer, open Safari and locate the `Develop` menu item tab. You should see all the device running web views.
4.  Find your projects within all the running web view and click on it.
5.  Debug

## Android

1.  Connect your Android device by USB to a computer that has Google Chrome web browser installed.
2.  Run your project in FullStacked on your Android device.
3.  On the computer, open Google Chrome at `chrome://inspect`.
4.  Select the webview of your running project.
5.  Debug

## Windows

Right-click > inspect

## Eruda

[Eruda](https://github.com/liriliri/eruda) is a console for mobile browsers. You can load it in your app and use it to inspect and debug.

First install eruda in your project

```shellscript
npm i eruda --save-dev
```

Then` import` and init eruda

```javascript
import eruda from "eruda";
eruda.init();
```

![Screenshot-2025-02-24-at-8.59.29-AM.png](https://img.fullstacked.org/Screenshot-2025-02-24-at-8.59.29-AM.png)
