# Installation

## iOS/iPadOS

> Not yet available on the Apple App Store  
> You will need to use [Test Flight](https://apps.apple.com/ca/app/testflight/id899247664)

Once you have [Test Flight](https://apps.apple.com/ca/app/testflight/id899247664) installed, get [FullStacked from here](https://testflight.apple.com/join/f1gnTHVm)

## MacOS

1. Download the right app package from github
  * If you have an Apple Silicon Mac get `fullstacked-darwin-arm64`
  * If you have an Intel Mac get `fullstacked-darwin-x64`
2. Drag and drop the FullStacked app to your Applications directory
3. Launch FullStacked from Launchpad

## Windows

1. Download the windows installer from github
2. Run the installer and then FullStacked will launch
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
fullstacked
```

## NPM

> Running using NPM opens up ports to communicate between the WebView and the OS.  
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
