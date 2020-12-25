# Development

## 1. Enable development mode

### 1.1. Set development mode

In `webpack.config.js`

```javascript
{
  mode: 'development',
  // ...
}
```

Set `mode` option in webpack config, the value can be `development` mode or `production` mode

### 1.2. Enable inline source map

In `webpack.config.js`

```javascript
{
  // ...,
  devtool: 'inline-source-map'
}
```

Add source map in bundled `js/css` file, then the source code can be read in browser debug tool

### 1.3. Start source file watcher

In `package.json`

```json
"scripts": {
  ...,
  "watch": "webpack --watch"
}
```

Then run shell command

```bash
$ npm run watch
```

The source file watcher will be started, when change source file, the webpack build work automated.

## 2. Use development server

### 2.1. Use devServer

- Install dependency, run shell command:
  
  ```bash
  $ npm install --save-dev webpack-dev-server
  ```

- Edit webpack config, in `webpack.config.js`

  ```javascript
  devServer: {
    contentBase: './dist'
  }
  ```

  - `contentBase`: root folder to start dev web server, point the same path to `output` option.

- Edit `package.json`, add run command

  ```json
  "scripts": {
    ...
    "dev": "webpack serve"
  }
  ```

- Start dev server by shell command

  ```bash
  $ npm run dev
  ```

### 2.2. Use middleware

- Install dependency, run shell command:
  
  ```bash
  $ npm install --save-dev express webpack-dev-middleware
  ```

  `webpack-dev-middleware` is based on `express` framework.

- Add `server.js`

  See [server.js](./server.js)

- Edit webpack config, in `webpack.config.js`

  ```javascript
  output: {
    // ...,
    publicPath: '/'
  }
  ```

  - The `webpack-dev-middleware` start dev server by `express` framework and `server.js` file, use `output` folder as web root and `publicPath` as context path.

- Edit `package.json`, add run command

  ```json
  "scripts": {
    ...
    "server": "node server.js"
  }
  ```

- Start dev server by shell command

  ```bash
  $ npm run server
  ```
