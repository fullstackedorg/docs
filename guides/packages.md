# Using npm Packages

The editor supports the use of packages hosted on [npmjs.com](https://www.npmjs.com).
Note that since the API runs in a JS Engine with minimal features, most NodeJS oriented packages aren't working.

## No node_modules directory

The packages are installed on premise and at the same place for all your projects.
This means that if you run a project that uses React, the next project you'll run that also needs react will already have it installed.
To view, edit and delete some packages, click on the packages button in top right of your Projects view.

![Settings Button](images/settings-button.png)

![Packages Button](images/packages/settings.png)

![Packages View](images/packages/npm-packages.png)



## Tested packages

- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [@mui/material](https://www.npmjs.com/package/@mui/material)
- [three](https://www.npmjs.com/package/three)