## Demo

https://andy770921.github.io/react-redux-router/

## Installation

1. `npm install`

2. Install VSCode extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Usage

1. `npm run watch`: start typescript watch mode

2. `npm run start`: start running dev-server

3. `npm run build`: build bundled JS file from src folder into dist folder

4. `npm run lint`: use ESLint for manually checking files inside src folder

5. Fix format error on save automatically

6. Deploy to gh-pages branch automatically via [GitHub Actions](https://github.com/marketplace/actions/github-pages-action)

## Initial Setting of Styled-Component and React Router

1. use `<GlobalStyle>` for resetting style

2. use `<Redirect to="/" />` for handling wrong URL path

## Folder Structure

1. Using the concept of [Ducks pattern](https://github.com/erikras/ducks-modular-redux)
2. Refer to the style guide of [Redux official website](https://redux.js.org/style-guide/style-guide/#structure-files-as-feature-folders-or-ducks), [Redux in Actions](https://livebook.manning.com/book/redux-in-action/chapter-11/51) 

``` 
┌── .vscode                    # VSCode setting for ESLint auto-fix function
├── dist                       # Static files like HTML template and bundled JS
├── src                        # All source code
│    ├── app                   # Main component and router setting 
│    ├── components            # Reusable component throughout different features  
│    ├── features              # Classified by features
│    │    ├── firstFeature
│    │    │    ├── (Componentes)      # React Components
│    │    │    └── firstFeatureTask   # Redux Task in specific feature 
│    │    │                             including Actions, Action Creaters, Epics and Reducer
│    │    └── secondFeature
│    │         ├── (Componentes)
│    │         └── secondFeatureTask
│    ├── redux                 # Redux store, root action, root epics and root reducer
│    └── index.tsx             # Redux Provider, add global style, and render to DOM
├── .gitignore                 # Exclude files from Git version contral
├── .eslintrc.js               # ESLint setting
├── .env                       # Environment variables setting 
├── README.md                  # README
├── package-lock.json          # Lock the version of dependencies packages
├── package.json               # List dependencies packages,npm scripts, project name etc.
├── webpack.config.js          # Webpack setting in develop mode
├── webpack.prod-config.js     # Webpack setting in production mode
└── tsconfig.json              # TypeScript settings
```
## Using GitHub Hosting

1. `npm install --save-dev dotenv`

2. Add "PUBLIC_URL" inside `.env`  
```
PUBLIC_URL=<your-repo-name> // e.g. PUBLIC_URL=react-redux-router
```
3. Add `getEnv` function in `webpack.prod-config.js` plugins array for getting environment variables successfully
```js
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const getEnv = () => {
    // call dotenv and it will return an Object with a parsed key 
    const env = dotenv.config().parsed;
    
    // reduce it to a nice object, the same as before
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});
    return new webpack.DefinePlugin(envKeys);
}
module.exports = {
    mode: 'production',
    // ....
    plugins: [
        getEnv()
    ]
};
```
3. Add `<script>` in `index.html` and `404.html` and change `var segmentCount = 1` in `404.html`. [Script Content Ref](https://github.com/rafrex/spa-github-pages/blob/gh-pages/index.html#L58)

4. Add `basename={process.env.PUBLIC_URL}` in the props of `<BrowserRouter>` in `index.tsx`

## Deploy to GitHub Pages Manually

1. `npm install gh-pages --save-dev -g`

2. Enter `gh-pages -d dist` in command line, change the source of GitHub Pages Settings into gh-pages

## Deploy to GitHub Pages by CI/CD

1. [add a personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) and then copy the value 

2. [add a Secrets key](https://stackoverflow.com/questions/53648652/how-to-use-environment-variable-in-github-page) `ACCESS_TOKEN` with the value of 1.

3. Create the file `.github/workflows/github-actions.yml`:
```yaml
name: CI/CD

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: macos-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v2
      with:
        persist-credentials: false
        
    - name: Build
      run: |
        npm install
        npm run build

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        personal_token: ${{ secrets.ACCESS_TOKEN }}
        publish_branch: gh-pages
        publish_dir: ./dist
```
## Reference

1. [GitHub Pages Ref](https://medium.com/@Dragonza/react-router-problem-with-gh-pages-c93a5e243819)

2. [GitHub Pages 2](https://zhuanlan.zhihu.com/p/102642360)

3. [Use Env Variables Ref](https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5)