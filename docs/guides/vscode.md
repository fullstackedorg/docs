# Building in VS Code

For large-scale projects, especially if your project depend on other services, it can be more handy to work in Visual Studio Code to enable heavier IDE features. For that purpose, there is an installable npm package that mimic the FullStacked environment and allows you to develop outside of the FullStacked Edior while reliably knowing your project will run in the FullStacked environment.

To do so, install FullStacked to your project and run with `npx`
```
npm i fullstacked
npx fullstacked
```

The same file structure and features applies to your project using the location of your `package.json` as the root directory. 