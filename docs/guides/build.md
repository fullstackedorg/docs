# Build from source

## Requirements

*   Go >=`1.23.1`
*   NodeJS `>=20`

## Clone the repository

```shellscript
git clone https://github.com/fullstackedorg/fullstacked.git
```

## Install npm dependencies

From the root directory of the repository, run `npm install`.

```shellscript
npm install
```

## Build the core

Go into the `core/build` directory and on a `UNIX`-like system (MacOS/Linux), use the `make` file.

```shellscript
make macos-x86_64-shared
```

On Window, use the `.bat` file

```shellscript
./windows.bat
```

## Running FullStacked

From the root directory of the repository, run `npm start`. Your browser should then open with FullStacked running.

```shellscript
npm start
```

## Build for a platform

All the setups to build for Android, iOS, MacOS, Windows and WASM are available in the `platform` directory. Make sure to build the core for the specific platform beforehand, and you should be able to find everything you need organized in each directory.

### Recommended IDEs

*   Development (NodeJS): [Visual Studio Code](https://code.visualstudio.com)
*   Android: [Android Studio](https://developer.android.com/studio?gclsrc=aw.ds\&gad_source=1\&gbraid=0AAAAAC-IOZl50u1ca81uhob7aKXcSKZvQ\&gclid=CjwKCAiAzvC9BhADEiwAEhtlN5biKroCXF8aFzVR6dbrItH5AJ4dNaBIKZSkqsGtxHuoM2v5InjcmBoCZ5IQAvD_BwE)
*   Apple: [Xcode](https://developer.apple.com/xcode/)
*   Windows: [Visual Studio](https://visualstudio.microsoft.com)
