# Simple bundler

> See also: https://webpack.js.org/guides/getting-started

## 1. Setup

### 1.1. Initalize project

Run shell command

```bash
$ npm init -y
```

### 1.2. Install webpack package

Run shell command

```bash
$ npm install webpack webpack-cli --save-dev
```

## 2. Create project

### 2.1. Create **javascript** file

See [index.js](./src/index.js)

### 2.2. Install runtime dependencies

Run shell command

```bash
$ npm install --save lodash
```

### 2.3. Create **webpack config** file

See [webpack.config.js](./webpack.config.js)

### 2.4. Create **html** file

See [index.html](./dist/index.html)

## 3. Build

### 3.1. Test build

```bash
$ npx webpack
```

- Check if `./dist/main.js` was created
- Open `./dist/index.html` in browser

### 3.2. Add run script

In `package.json`

```json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  }
}
```

Then build project

Run shell command

```bash
$ npm run build
```

## 4. With babel

### 4.1. Add babel support

- Install babel support packages

  ```bash
  $ npm install --save-dev @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-proposal-object-rest-spread @babel/plugin-syntax-dynamic-import babel-plugin-import
  ```
  
  - `@babel/core`: babel core component
  - `@babel/preset-env`: 
  - `@babel/plugin-proposal-class-properties`: to compile `class`
  - `@babel/plugin-proposal-decorators`: to compile `decorator`
  - `@babel/plugin-proposal-object-rest-spread`: 
  - `@babel/plugin-syntax-dynamic-import`:
  - `babel-plugin-import`:

- Edit `.babelrc` file

  ```json
  {
    "presets": [
      [
        "@babel/env",
        {
          "targets": {
            "browsers": [
              "last 3 versions",
              "safari >= 7"
            ],
            "node": "8.10"
          },
          "modules": false,
          "debug": false,
          "corejs": 3,
          "useBuiltIns": "usage"
        }
      ]
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ],
      "@babel/plugin-proposal-object-rest-spread",
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css"
        }
      ],
      "@babel/plugin-syntax-dynamic-import"
    ]
  }
  ```

### 4.2. Use `babel-loader`

- Install `babel-loader`

  ```bash
  $ npm install --save-dev babel-loader
  ```

- Config in `webpack.config.js`

  ```javascript
  {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false
            }
          }
        }
      ]
    }
  }
  ```

### 4.3. Use `@babel/runtime`

`@babel/runtime` is a runtime libaray, to makesure that the old browsers an support the new ES6 specification.

- Add babel plugin

  ```bash
  $ npm install --save-dev @babel/plugin-transform-runtime
  ```

- Config `.babelrc` file

  ```json
  {
    "plugins": [
      "@babel/plugin-transform-runtime",
      ...
    ]
  }
  ```

- Install runtime package

  ```bash
  $ npm install --save @babel/runtime
  ```
  