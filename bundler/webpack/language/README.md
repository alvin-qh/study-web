# Configuration Languages

## 1. Use ECMAScript 6

### 1.1. Install dependencies

Install babel toolchain packages

```bash
$ npm install @babel/core @babel/preset-env babel/register
```

Create `.babelrc` config file

```json
{
  "presets": [
    "@babel/env"
  ]
}
```

### 1.2. Create webpack config file

Create `webpack.config.babel.js` file with es6 grammar, this is a default webpack config file by use babel

> See [webpack.config.babel.js](./es6/webpack.config.babel.js)

```bash
$ npx webpack --progress
```

Or create any `.babel.js` file, then use `-c` option to select it

```bash
$ npx webpack -c webpack-es6.config.babel.js
```

## 2. Use TypeScript

### 2.1. Install dependencies

- Install typescript with nodejs support

  ```bash
  $ npm install --save-dev typescript ts-node
  ```

- Install js to ts type support

  ```bash
  $ npm install --save-dev @types/node \
                           @types/webpack \
                           @types/webpack-dev-server \
                           @types/html-webpack-plugin \
                           @types/mini-css-extract-plugin
  ```

### 2.2. Initialize the ts-node env

To create global `tsconfig.json` file

```bash
$ npx tsc --init
```

By using webpack with ts-node, `tsconfig.json` must with the following `compilerOptions`:

- `module`: must be `commonjs`, the ts-node only support this kind of module
- `target`: can be `es5` or `es6`
- `allowSyntheticDefaultImports`: must be `true`
- `esModuleInterop`: must be `true`

These ts config options may conflict with subsequent web project configs, so can specify ts config file for webpack through `tsconfig-paths`

```bash
$ npm install --save-dev tsconfig-paths
```

Create a specify ts config file, such as `tsconfig-webpack.json`

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  }
}
```

Define `TS_NODE_PROJECT` env variable to use that specify config file

```bash
cross-env TS_NODE_PROJECT="tsconfig-webpack.json" npx webpack
```

### 2.3. Create webpack config with typescript

Create webpack config file named `webpack.config.ts`, that is default webpack config file with typescript

> See also: [webpack.config.ts](./ts/webpack.config.ts)

```bash
cross-env TS_NODE_PROJECT="tsconfig-webpack.json" npx webpack --progress
```

Or create any `.ts` file, then use `-c` option to select it

```bash
cross-env TS_NODE_PROJECT="tsconfig-webpack.json" npx webpack -c webpack-ts.config.ts --progress
```

### 2.4. Config ESLint for typescript

#### 2.4.1. Install `eslint` package with typescript

> See https://github.com/typescript-eslint/typescript-eslint

```bash
$ npm install --save-dev eslint \
                         @typescript-eslint/eslint-plugin \
                         @typescript-eslint/parser
```

Initialize `eslint` config file

```bash
$ npx eslint --init
```

Answer the all questions, and generate `.eslintrc.json` config file

```json
{
  ...
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "tsconfigRootDir": ".",
    "project": [
      "./tsconfig.json"
    ]
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  ...
}
```

> See [eslintrc.json](./ts/.eslintrc.json) file

#### 2.4.2. Work with eslint:

**Cli:**

In `package.json`, add commandline into `scripts`:

```json
{
  ...
  "scripts": {
    "lint": "eslint --ext .ts src/script/**/*.ts --fix"
  },
  ...
}
```

**Webpack:**

Install `eslint-loader` to integrate with webpack

```bash
$ npm install --save-dev eslint-loader
```

In `webpack.config.ts`, add preload config

```javascript
{
  // ...,
  module: {
    // ...,
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              eslintPath: require.resolve('eslint'),
            }
          }
        ]
      },
      // ...
    ]
  }
}
```
