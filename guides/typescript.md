# Using TypeScript

*> [TypeScript](https://www.typescriptlang.org) is a strongly typed programming language that builds on JavaScript,
giving you better tooling at any scale. -TypeScript Website*

At FullStacked, we believe there are very few reasons **not** to use TypeScript (TS).
It allows to work as fast as with JavaScript and offers the needed structure
to grow a projet at scale.

## Getting Started with TS

To start using the TypeScript language service, simply create a `.ts` or `.tsx` file and open it.
Once open, the TS Worker will start and you'll see the TS logo light up and start to flash.

![TS Icon Anim](/images/typescript/ts-icon-anim.gif)

As you code, autocompletions and type errors will appear to help you out.

![TS Completion](/images/typescript/completion.png)
![TS Error](/images/typescript/error.png)
![TS Property](/images/typescript/property.png)

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