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

5. Fix format error automatically on save

## Folder Structure

1. Using the concept of [Ducks pattern](https://github.com/erikras/ducks-modular-redux)
2. Refer the style guide of [Redux official website](https://redux.js.org/style-guide/style-guide/#structure-files-as-feature-folders-or-ducks), [Redux in Actions](https://livebook.manning.com/book/redux-in-action/chapter-11/51) 
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
├── README.md                  # README
├── package-lock.json          # Lock the version of dependencies packages
├── package.json               # List dependencies packages,npm scripts, project name etc.
├── webpack.config.js          # Webpack setting in develop mode
├── webpack.prod-config.js     # Webpack setting in production mode
└── tsconfig.json              # TypeScript settings
```
## Using GitHub Hosting

1. Add "homepage" inside `package.json`
```js
    {
        "homepage": "https://andy770921.github.io/react-redux-router",
    }
```

2. Add `<script>` inside `index.html` and `404.html`. [Script Content Ref](https://github.com/rafrex/spa-github-pages/blob/gh-pages/index.html#L58)

3. Add `basename={process.env.PUBLIC_URL}` inside `<BrowserRouter>` in `index.tsx`

4. `npm install gh-pages --save-dev -g`

5. Enter `gh-pages -d dist` in command line

6. [Additional Ref](https://medium.com/@Dragonza/react-router-problem-with-gh-pages-c93a5e243819)