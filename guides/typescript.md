# Using TypeScript

"[TypeScript](https://www.typescriptlang.org) is a strongly typed programming language that builds on JavaScript,
giving you better tooling at any scale." *-TypeScript Website*

At FullStacked, we believe there is very few reasons not to use TypeScript (TS).
It allows to work as fast as with JavaScript and offers the needed structure
to grow a projet at scale.

## Getting Started with TS

To start using the TypeScript language service, simply create a `.ts` or `.tsx` file and open it.
Once open, the TS Worker will start and you'll the TS logo will light up and start to flash.

[ image ]

As you code, you'll see autocompletions and type errors appear.

[ image ]

### IMPORTANT

Since browsers does not officially support `ts` extension, even if your entrypoint is `index.ts`/`index.tsx`,
you still have to use `index.js` in your `index.html` file.

```html
<!-- index.html -->
<script type="module" src="index.js"></script>
```

## Example

```ts
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