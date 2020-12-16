# Output management

## 1. Setup

### 1.1. Initalize project

```bash
$ npm init -y
```

### 1.2. Install webpack package

```bash
$ npm install webpack webpack-cli --save-dev
```

## 2. Create project

### 2.1. Create **javascript** file

See [index.js](./src/script/index.js) and [print.js](./src/script/print.js)

### 2.2. Install runtime dependencies

```bash
$ npm install --save lodash
```

### 2.3. Create webpack config file

See [webpack.config.js](./webpack.config.js)

## 3. More output options

### 3.1. Path and file name of output file

- Add prefix path in `entry` options, then the entry file will mapping as: `./src/script/index.js` => `{entry output path}/script/index{.js}`

  ```javascript
  entry: {
    // ...,
    'script/index': './src/script/index.js'
  }
  ```

  And the entry output path config as:

  ```javascript
  output: {
    // ...,
    path: path.resolve(__dirname, 'dist')
  }
  ```

  So file `./src/script/index.js` should be mapping as `./dist/script/index.bundle-xxxxxxxx.js`

- In `output > filename` option, use `[hash:8]` placeholder can output hash code in file name

  ```javascript
  output: {
    // ...,
    filename: '[name].bundle-[hash:8].js'
  }
  ```

### 3.2. Clean output folder

Use `clean-webpack-plugin` to clean output folder before build

Install dependency

```bash
$ npm install --save-dev clean-webpack-plugin
```

Webpack config

```javascript
plugins: [
  // ...,
  new CleanWebpackPlugin()
]
```

### 3.3. Make html file and inject resource

Use `html-webpack-plugin` to make html file and inject 'js', 'css' file reference.

Install dependency

```bash
$ npm install --save-dev html-webpack-plugin
```

Webpack config

```javascript
plugins: [
  new HtmlWebpackPlugin({
    title: 'Output Management',  // title of html
    template: './src/template/index.html'  // template of html (optional)
  })
]
```

The template html should be:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Use title prpperty of HtmlWebpackPlugin object -->
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body></body>
</html>
```

### 3.4. Output manifest file

Use `webpack-manifest-plugin` to output manifest file.

Install dependency

```bash
$ npm install --save-dev webpack-manifest-plugin
```

Webpack config

```javascript
plugins: [
  // ...,
  new WebpackManifestPlugin({ 
    ...
  })
]
```

The output manifest file:

```json
{
  "script/index.js": "script/index.bundle-662fc220.js",
  "index.html": "index.html"
}
```

## 4. Build

### 4.1. Test build

```bash
$ npx webpack
```

- Check if `./dist/main.js` was created
- Open `./dist/index.html` in browser

### 4.2. Add run script in package.json

```javascript
{
  // ...,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  }
}
```

Then build project by `npm run` command

```bash
$ npm run build
```
