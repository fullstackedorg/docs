# Installation

## iOS/iPadOS

Stable releases are available on the
[Apple App Store](https://apps.apple.com/ca/app/fullstacked/id6477835950)

### or

Pre-releases and Beta are available on [Test Flight](https://apps.apple.com/ca/app/testflight/id899247664), with [this public link](https://testflight.apple.com/join/f1gnTHVm)

## MacOS

1. Download the right app package from github
  * If you have an Apple Silicon Mac get `fullstacked-darwin-arm64`
  * If you have an Intel Mac get `fullstacked-darwin-x64`
2. Drag and drop the FullStacked app to your Applications directory
3. Launch FullStacked from Launchpad

## Windows

1. Download the windows installer from github
2. Run the Setup and then FullStacked will launch
3. You will have a Desktop shortcut for the next times you want to start FullStacked

## Linux

### deb (Debian, Ubuntu)

1. Download the right app package for your cpu architecture
  * If you have an `x64` get `fullstacked-deb-x64`
  * If you have an `arm` get `fullstacked-deb-arm`

2. Open a terminal in your `~/Downloads` directory and install
  * using `apt`
    ```shell
    sudo apt install ./fullstacked-deb-x64
    ```
 * or `dpkg`
   ```shell
    sudo dpkg --install ./fullstacked-deb-x64
    ```
If you are getting an error like
```
dpkg-deb: error: archive './fullstacked-0.1.0-linux-arm64.deb' uses unknown compression for member 'control.tar.zst', giving up
```
Repack the `.deb` and retry installing. Go ahead with these commands
```shell
sudo apt install binutils
ar x fullstacked-0.1.0-linux-arm64.deb
zstd -d < control.tar.zst | xz > control.tar.xz
zstd -d < data.tar.zst | xz > data.tar.xz
ar -m -c -a sdsd fullstacked-0.1.0-linux-arm64_repacked.deb debian-binary control.tar.xz data.tar.xz
rm debian-binary control.tar.xz data.tar.xz control.tar.zst data.tar.zst
sudo apt install fullstacked-0.1.0-linux-arm64_repacked.deb
```
3. Launch FullStacked from terminal or from your Activity view
```shell
fullstacked
```

### rpm (RHEL, Rocky)

1. Download the right app package for your cpu architecture
  * If you have an `x64` get `fullstacked-rpm-x64`
  * If you have an `arm` get `fullstacked-rpm-arm`

2. Open a terminal in your `~/Downloads` directory and install
```shell
sudo rpm --install ./fullstacked-rpm-x64
```
3. Launch FullStacked from terminal or from your Activity view
```shell
FullStacked
```

## npm CLI

> Running using NPM opens up ports to communicate between the WebView and the API.  
> **Not recommended on public networks.**

Install globally and start from the command line
```shell
npm i -g @fullstacked/editor@latest
fullstacked
```
or use it with npx
```shell
npx @fullstacked/editor@latest
```

## Docker

> WIP  
> Not yet available

> Running using Docker opens up a port to communicate between the WebView and the OS.  
> **Not recommended on public networks.**

```shell
docker run fullstackedorg/editor
```

### Domain Setup for Cloud Use

FullStacked for docker has a clever subdomain to port reverse-proxy to allow the use of
your FullStacked instance from a single domain and sub-domains.

#### Example

* **example.com** is the main entrypoint
* **\*.example.com** will be for ports subdomains
  * **9001.example.com** reaches localhost:9001 inside the docker container

For this reason, you will need to point DNS records and have SSL certificates for both your domain and the wildcard subdomain.

## Build from source

> Same as NPM  
> **Not recommended on public networks.**

Requirements
* Git
* NodeJS `>=18` with NPM

```shell
git clone https://github.com/fullstackedorg/editor.git
cd editor
npm i
npm start
```
