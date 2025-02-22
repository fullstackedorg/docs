# Using npm Packages

The editor supports the use of packages hosted on [npmjs.com](https://www.npmjs.com). Simply use `import` `from` and as soon as esbuild cannot resolve a package, FullStacked will try to download it.

## Installing packages

Use the terminal to install packages from npm. Simply use the `npm install` or `npm i` command.

You can always install specific version or tag.

```shellscript
npm install react
npm i react@18 react-dom@18
```

## package.json and lock.json

After every installation of new package, your `package.json` will be updated with this newly added package plus it’s version. You can always edit this file to add, remove packages or modify the versions.

On the other side, the `lock.json` file is generated from a successful installation process. **DO NOT MODIFY THIS FILE**. It makes sure all the dependencies your project needs, both direct and indirect, work together smoothly. Plus, it speeds up fresh installations significantly.
