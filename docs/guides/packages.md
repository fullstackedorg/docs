# Using npm Packages

The editor supports the use of packages (node_modules). You can install pacakges directly from a git repository or hosted on [npmjs.com](https://www.npmjs.com). Simply use `import` `from` and as soon as esbuild cannot resolve a package, FullStacked will try to download it.

## Installing packages from npmjs

Use the prompt to install packages from npm. Simply use the `npm install` or `npm i` command.

You can always install specific version or tag.

```
npm install react
npm i react@18 react-dom@18
```

![Prompt Typing](https://files.fullstacked.org/Screenshot-2025-04-03-at-4.06.37-PM.png)

## Installing packages from a git repository

## package.json and lock.json

After every installation of new package, your `package.json` will be updated with this newly added package plus it’s version. You can always edit this file to add, remove packages or modify the versions.

On the other side, the `lock.json` file is generated from a successful installation process. **DO NOT MODIFY THIS FILE**. It makes sure all the dependencies your project needs, both direct and indirect, work together smoothly. Plus, it speeds up fresh installations significantly. When your project is runs before having run `npm install` in the terminal beforehand. FullStacked will check with the `lock.json` if all dependencies are there before trying to bundle and launch the project.

![Packages Installation](https://files.fullstacked.org/Screenshot-2025-02-23-at-10.26.46-AM.png)
