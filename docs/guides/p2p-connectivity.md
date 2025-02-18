# Peer-to-Peer Connectivity

> test

FullStacked offers a built-in peer-to-peer functionality. This allows apps to have multi-user features without the need of an internet connection.

## Paring

Open the Peer-to-Peer Connectivity view.

![BlockNote image](/images/peer-to-peer/p2p-icon.png)

Make sure the other user is close and/or on the same local network and on the Peer-to-Peer connectivity view also. You will see him as a Nearby Peer.

![BlockNote image](/images/peer-to-peer/p2p-nearby.png)

Hit the Pair button to initate the trusting process. Make sure both devices have the same validation code. Ignore any trust request from unknown sources or with different validation code.

|        |        |
| ------ | ------ |
|        |        |
|        |        |
|        |        |
|        |        |
|        |        |
|        |        |
|        |        |
|        |        |
|        |        |
|        |        |
|        |        |
|        |        |
|        |        |
|        |        |
| User 1 | User 2 |
|        |        |

Once the second user hit Trust, the process will finish with the two devices connected.

![BlockNote image](/images/peer-to-peer/p2p-connection.png)

### Trusted peers

Once you have paired with another peer, FullStacked save it as a "Trusted" peer. Meaning you have exchanged encryption keys and secrets so that on the next pairing attempt, if anything isn't matching, FullStacked will ignore this peer. In the case where everything is matching, the connection establishes instantly.

## Broadcasting data

To share data across every connected peer, simply use the broadcast method on the `rpc` object.

```typescript
rpc().broadcast("some data");
```

## Receiving data

To handle any data received from connected peers, make you app defines a callback on the `onPush["peerData"]`.

```typescript
onPush["peerData"] = (data: string) => {
    console.log(`Received ${data} from peer`);
}
```
