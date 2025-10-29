# Build from source

## Requirements

*   [Go](https://go.dev) `>=1.25`
*   [NodeJS](https://nodejs.org) `>=20`

### Windows Requirements

* [llvm-mingw](https://github.com/mstorsjo/llvm-mingw) `=20250613`

## Running

Clone and enter the directory

```
git clone https://github.com/fullstackedorg/fullstacked.git
cd fullstacked
```

Checkout the submodules

```
git submodule update --init
```

Install the dependencies and start.

```
npm install
npm start
```

## Build for a platform

Building as the native app is a bit more tedious. All the setups for specific platforms are available in the `platform` directory. Make sure to build the core for the specific platform beforehand in the `core/build` directory, and you should be able to find everything you need organized in each directory.

### Recommended IDEs

*   Development (NodeJS): [Visual Studio Code](https://code.visualstudio.com)
*   Android: [Android Studio](https://developer.android.com/studio)
*   Apple: [Xcode](https://developer.apple.com/xcode)
*   Windows: [Visual Studio](https://visualstudio.microsoft.com)
