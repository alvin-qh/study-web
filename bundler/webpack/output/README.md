# Output management

## 1. Javascript bundler

- Add prefix path in `entry` options, then the entry file will mapping as: `./src/script/index.js` => `{entry output path}/script/index{.js}`

  In `webpack.config.js`

  ```javascript
  entry: {
    // ...,
    "index": "./src/script/index.js"
  }
  ```

  And the entry output path config as:

  In `webpack.config.js`

  ```javascript
  output: {
    // ...,
    path: path.resolve(__dirname, "dist"),
    filename: "script/[name].bundle-[hash:8].js",
    chunkFilename: "script/[name].bundle-[hash:8].js",
    pathinfo: false
  }
  ```

  - `path`: path to save output files
  - `filename`: name format of output files which defined in `entry` option
  - `chunkFilename`: name format of output files which not defined in `entry` option

  So entry file `./src/script/index.js` should be mapping as output file `./dist/script/index.bundle-xxxxxxxx.js`

## 2. CSS bundler

- Install dependency

  Run shell command

  ```bash
  npm install --save-dev mini-css-extract-plugin
  ```

- Config `plugin`

  In `webpack.config.js`

  ```javascript
  plugins: [
    // ...,
    new MiniCssExtractPlugin({
      filename: "style/[name].bundle-[hash:8].css"
    })
  ]
  ```

  - `filename`: name of outputing css file

- Config `module` > `rules`

  In `webpack.config.js`

  ```javascript
  rules: [
    {
      test: /\.css$/i,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: ".."
          }
        },
        {
          loader: "css-loader"
        }
      ]
    }
  ]
  ```

  - `css-loader`: load css from `import` in javascript or `@import` in css file
  - `MiniCssExtractPlugin.loader`: bundle loaded css content into `.css` file
    - `publicPath`: prefix path name add in front of rewrite url, in css file

## 3. Assets bundler

- Install dependency

  Run shell command

  ```bash
  npm install --save-dev url-loader file-loader
  ```

- Config `module` > `rules`

  In `webpack.config.js`

  ```javascript
  rules: [
    // ...,
    {
      test: /\.(svg|png|jpg|gif)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 10240,
            name: "image/[name]-[hash:8].[ext]"
          }
        }
      ]
    },
    {
      test: /\.(eot|woff|woff2|ttf)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 10240,
            name: "font/[name]-[hash:8].[ext]"
          }
        }
      ]
    }
  ]
  ```

  - `url-loader`: load file reference in `.js` or `.css` file, and rewrite the url to asset file in output folder
    - `publicPath`: prefix path name add in front of rewrite url, in javascript file

## 3. Clean output folder

Use `clean-webpack-plugin` to clean output folder before build

Install dependency, Run shell command

```bash
npm install --save-dev clean-webpack-plugin
```

In `webpack.config.js`

```javascript
plugins: [
  // ...,
  new CleanWebpackPlugin()
]
```

## 4. Make html file and inject resource

Use `html-webpack-plugin` to make html file and inject "js", "css" file reference.

Install dependency, Run shell command

```bash
npm install --save-dev html-webpack-plugin
```

In `webpack.config.js`

```javascript
plugins: [
  new HtmlWebpackPlugin({
    title: "Output Management",  // title of html
    template: "./src/template/index.html"  // template of html (optional)
  })
]
```

The template html should be:

In `src/template/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Use title prpperty of HtmlWebpackPlugin object -->
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
  <div class="main"></div>
</body>
</html>
```

### 5. Output manifest file

Use `webpack-manifest-plugin` to output manifest file.

Install dependency, Run shell command

```bash
npm install --save-dev webpack-manifest-plugin
```

In `webpack.config.js`

```javascript
plugins: [
  // ...,
  new WebpackManifestPlugin({ 
    ...
  })
]
```

The output manifest file like:

```json
{
  "index.css": "style/index.bundle-e702abe4.css",
  "index.js": "script/index.bundle-e702abe4.js",
  "index.svg": "image/fa-solid-900-371dbce0.svg",
  "image/fa-solid-900.svg": "image/fa-solid-900-371dbce0.svg",
  "font/fa-solid-900.eot": "font/fa-solid-900-3a24a60e.eot",
  "font/fa-regular-400.woff2": "font/fa-regular-400-1008b522.woff2",
  "index.html": "index.html",
  ...
}
```
