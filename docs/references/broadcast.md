# broadcast

Share data to every connected peers.

## Method

```typescript
rpc().broadcast(data: string): void;
```

## Example

```typescript
// broadcast `Hello World` to other peers
rpc().broadcast("Hello World");

// broadcast an object
const obj = {
    foo: "bar"
}
rpc().broadcast(JSON.stringify(obj));
```
