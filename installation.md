# Installation

## iOS/iPadOS

Stable releases are available on the
[Apple App Store](https://apps.apple.com/ca/app/fullstacked/id6477835950)

or

Pre-releases and Beta are available on [Test Flight](https://apps.apple.com/ca/app/testflight/id899247664), with [this public link](https://testflight.apple.com/join/f1gnTHVm)

## Android

Stable releases are available on the
[Google Play Store](https://play.google.com/store/apps/details?id=org.fullstacked.editor)

or

To install the pre-releases,
1. Join the Google Group **Fullstacked Testers**  
   [https://groups.google.com/g/fullstacked](https://groups.google.com/g/fullstacked)
3. Go back to the [Google Play Store](https://play.google.com/store/apps/details?id=org.fullstacked.editor) to update


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

## npm

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

> **Note**  
> Using Docker is still an experimental way to keep persistent peers online at all time.  
> **Not recommended for the basic usage of FullStacked.**

The main goal of FullStacked with Docker, is 
to launch an instance of FullStacked Editor on a machine that will persistently stay alive.
Meaning he can relay and store peer data at all time.

In the Docker setup, FullStacked is running just like any other platform,
but it also run a [puppeteer](https://github.com/cplepage/puppeteer-stream) remote that allows to simulate leaving a browser open.

### To simply run FullStacked in Docker

FullStacked runs on the default ports:
* `9000` for the Editor interface
* `14000` for the Peer-to-Peer connectivity

So to only use it for basic usage, run:
```shell
docker run -p 9000:9000 -p 14000:14000 -v fullstacked-data:/home fullstackedorg/editor
```

FullStacked will be available at `http://localhost:9000` and projects will run at `http://{SLUGFIED_TITLE}.localhost:9000`.

> Safari won't work because the DNS resolving does not like `[subdomain].localhost`  
> **Please use Chrome or Firefox**

### To remote control FullStacked, Linux Only

Now, to mimic an always open browser navigator and to have an always alive peer,
FullStacked in Docker also have a remote controller running at port `12000`.

This runs a stream of the browser window running headless inside the container.
To make the discovery and the WebRTC stream connect, 
the simplest way is to run the container directly on the host network with privileged.

```shell
docker run --network host --privileged -v fullstacked-data:/home fullstackedorg/editor
```

From any other device, open a web page at `http://{YOUR_MACHINE_IP}:12000`.
You will see a video stream with forwarding click and keyboard events running.

![Docker Remote Control](/images/docker/docker-remote-control.png)

From there, connect to other peers and run any amount of projects. 
You will see that even if you close the stream (the web page), your other devices stays connected
to this instance.

![Docker Remote Control Peer Alive](/images/docker/docker-remote-control-peer-alive.png)

## Build from source

> Same as NPM  
> **Not recommended on public networks.**

Requirements
* Git
* NodeJS `>=18.17.0` with NPM

```shell
git clone https://github.com/fullstackedorg/editor.git
cd editor
npm i
npm start
```
