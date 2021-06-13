# Create React App

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


## 2. Setup IDE

### 2.1. Add Lint Support

Add `.eslintrc.json` at project root

```json
{
  "extends": "react-app"
}
```
