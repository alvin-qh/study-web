# Development

> See also: <https://webpack.js.org/guides/development/>

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
  devtool: 'cheap-source-map'
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
npm run watch
```

The source file watcher will be started, when change source file, the webpack build work automated.

## 2. Use development server

- Install dependency, run shell command:
  
  ```bash
  npm install --save-dev webpack-dev-server
  ```

- Edit webpack config, in `webpack.config.js`

  > See also: <https://webpack.js.org/configuration/dev-server>

  ```javascript
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    inline: true,
    stats: 'minimal',
    compress: true,
    writeToDisk: true
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
  npm run dev
  ```
