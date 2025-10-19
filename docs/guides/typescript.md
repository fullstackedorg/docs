# Using TypeScript

> *[TypeScript](https://www.typescriptlang.org) is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.*\
> — *TypeScript Website*

Nowadays, there are very few reasons **not** to use TypeScript (TS). It allows to work as fast as with JavaScript and offers the needed structure to grow a projet at scale.

## Getting Started with TS

As you code, autocompletions and type errors will appear to help you out.

![TypeScript autocomplete](https://files.fullstacked.org/Screenshot-2025-02-23-at-10.12.36-AM.png)
![TypeScript error](https://files.fullstacked.org/Screenshot-2025-02-23-at-10.13.26-AM.png)
![TypeScript error 2](https://files.fullstacked.org/Screenshot-2025-02-23-at-10.13.38-AM.png)

## Example

```typescript
// index.ts

type Foo = {
    bar: string
}

function giveMeFoo(): Foo {
    return {
        bar: "baz"
    }
}

const x = giveMeFoo();
   // ^ type Foo

const y = x.bar;
   // ^ type string
```
