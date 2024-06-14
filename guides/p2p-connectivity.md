# Peer-to-Peer Connectivity

FullStacked offers a built-in peer-to-peer functionality.
This allows apps to have multi-user features without the need of an internet connection.

## Paring

![Peer-to-Peer Button](/images/peer-to-peer/p2p-icon.png)


![Nearby Peer](/images/peer-to-peer/p2p-nearby.png)


| User 1 | User 2 |
| -------- | ------- |
| ![Trust Code](/images/peer-to-peer/p2p-trust-code.png) | ![Trust Dialog](/images/peer-to-peer/p2p-trust-dialog.png) |


![Connected](/images/peer-to-peer/p2p-connection.png)


### Trusted peers



## Broadcasting

```ts
rpc().broadcast("some data");
```

## Receiving data

```ts
onPush["peerData"] = (data: string) => {
    console.log(`Received ${data} from peer`);
}
```