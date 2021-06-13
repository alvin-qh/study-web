# Create React App

[toc]

## 1. Create App

### 1.1. Install create-react-app and create app

- Use npx

  ```bash
  $ npm install -g create-react-app   # Optional
  $ npx create-react-app my-react-app
  ```

- Use npm

  ```bash
  $ npm install -g create-react-app  # Optional
  $ npm init react-app my-react-app
  ``` 

- Use yarn

  ```bash
  $ yarn global add create-react-app  # Optional
  $ yarn create react-app my-react-app
  ```

### 1.2. Script command

- `npm start` or `yarn start`

  Start the app in dev mode. Open http://localhost:3000 to visit this app.
  If the code changed, the app should be recompiled and reload in browser.

- `npm test` or `yarn test`

  Run unit test

- `npm run build` or `yarn build`

  Build the package


## 2. Development settings

### 2.1. Add Lint Support

Add `.eslintrc.json` at project root

```json
{
  "extends": "react-app"
}
```

### 2.2. Debug in Chrome

#### 2.2.1. Visual Studio Code

1. Install "Debugger for Chrome" plugin in VSCode.

2. Add the following config in `.vscode/launch.json` file.

    ```json
    {
      "version": "0.2.0",
      "configurations": [
        {
          "name": "Chrome",
          "type": "chrome",
          "request": "launch",
          "url": "http://localhost:3000",
          "webRoot": "${workspaceRoot}/src",
          "sourceMapPathOverrides": {
            "webpack:///src/*": "${webRoot}/*"
          }
        }
      ]
    }
    ```
    
3. Debug (or Run) app in Chrome

    Run `yarn start`

    Press 'F5' Start Debugging (or 'Shift + F9' Run Without Debugging) to start app in Chrome

#### 2.2.2. WebStorm

1. Install "JetBrains IDE Support Chrome" Plugin in WebStorm.

2. In WebStorm menu `Run` -> `Edit Configurations ...`, Click `+` button and select `Javascript Debug`. Paste url "http://localhost:3000" into URL property and save.

3. Debug (or Run) app in Chrome

  Run `yarn start`
  Press `^D` (macOS) or `F9` (Windows) to start debug in WebStorm

### 2.3. Git hook

Use "prettier" to format code.

Add dependencies:

```bash
$ yarn add husky lint-staged prettier
```

Set add settings in `package.json` file

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
    "prettier --single-quote --write",
    "git add"
  ]
}
```

Or run cli to format code

```bash
$ npx prettier --single-quote --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"
```

### 2.4. Integrate Component Tools

#### 2.4.1. Storybook for React

1. Install dependencies

    ```bash
    $ yarn add storybook @storybook/react
    ```

2. Add scirpt command

    ```json
    {
      "scripts": {
        "storybook": "start-storybook -p 9001 -c .storybook",
        "build-storybook": "build-storybook -c .storybook"
      }
    }
    ```

3. Create config js file

    See [.storybook/config.js](../.storybook/config.js)

4. Write story in storybook

    See [storybooks/button-demo.js](../storybooks/button-demo.js)

5. Run storybook

    ```bash
    $ yarn storybook
    ```

6. Addtion webpack.config.js for storybook

    Add `webpack.config.js` into `.storybook` folder, see [.storybook/webpack.config.js](../.storybook/webpack.config.js)

> More info about Storybook, see [Official Website](https://storybook.js.org/docs/react/get-started/introduction)

#### 2.4.2. React Styleguidist

### 2.4. Bundle analysis
