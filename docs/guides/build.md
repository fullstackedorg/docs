# Build from source

## Requirements

*   Go >=`1.25`
*   NodeJS `>=20`

## Clone the repository

Clone and enter the directory

```
git clone https://github.com/fullstackedorg/fullstacked.git
cd fullstacked
```

Checkout the submodules

```
git submodule update --init
```

## Install npm dependencies

From the root directory of the repository, install the dependencies.

```
npm install
```

## Build the core

Go into the `core/build` directory and on a `UNIX`-like system (MacOS/Linux), use the `make` file to build the core a shared library, then return to the root directory.

```
cd core/build
make macos-amr64-shared
cd ../../
```

On Window, use the `.bat` file

```
cd core/build
./windows.bat
cd ../../
```

## Running FullStacked

From the root directory of the repository, run `npm start`. Your browser should then open with FullStacked running.

```
npm start
```

## Build for a platform

All the setups to build for specific platforms are available in the `platform` directory. Make sure to build the core for the specific platform beforehand, and you should be able to find everything you need organized in each directory.

### Recommended IDEs

*   Development (NodeJS): [Visual Studio Code](https://code.visualstudio.com)
*   Android: [Android Studio](https://developer.android.com/studio?gclsrc=aw.ds\&gad_source=1\&gbraid=0AAAAAC-IOZl50u1ca81uhob7aKXcSKZvQ\&gclid=CjwKCAiAzvC9BhADEiwAEhtlN5biKroCXF8aFzVR6dbrItH5AJ4dNaBIKZSkqsGtxHuoM2v5InjcmBoCZ5IQAvD_BwE)
*   Apple: [Xcode](https://developer.apple.com/xcode/)
*   Windows: [Visual Studio](https://visualstudio.microsoft.com)
