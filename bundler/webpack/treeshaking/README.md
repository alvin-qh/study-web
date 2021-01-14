# Treeshaking

Treeshaking is an algorithm can remove some unused code from imported modules.

> See also: https://webpack.docschina.org/guides/tree-shaking

## 1. `usedExports`

`usedExports` use `terser-webpack-plugin` plugin to execute treeshaking.

It can remove dead code from module which was not imported.

```javascript
{
  // ...,
  optimization: {
    usedExports: true,
    // ...
  }
}
```

The treeshaking feature was implemented by `uglifyjs-webpack-plugin` plugin, this plugin reduces the package size by shuffling the code, compressing the names, removing white space, and treeshaking algorithm, and makes the output code hard to read.

## 2. `sideEffects`

Mark the pacakge is "Side Effects" or "Side Effects free":

- Set `optimization.sideEffects` is `true`, tells webpack to recognise the sideEffects flag in `package.json` or `rules` to skip over modules which are flagged to contain no side effects when exports are not used.

  ```javascript
  {
    optimization: {
      providedExports: true,
      sideEffects: true
    }
  }
  ```

  `optimization.sideEffects` depends on `optimization.providedExports` to be enabled. This dependency has a build time cost, but eliminating modules has positive impact on performance because of less code generation. Effect of this optimization depends on your codebase, try it for possible performance wins.

- Set `sideEffects` property in `package.json`

  - Mark package is "Side Effects"

    ```json
    {
      ...,
      "sideEffects": true
    }
    ```

    The whole packge is marked as "Side Effects".

  - Mark package is "Side Effects free"

    ```json
    {
      ...,
      "sideEffects": false
    }
    ```

    The whole packge is marked as "Side Effects free".

  - Mark some modules of pacakge is "Side Effects"

    ```json
    {
      ...,
      "sideEffects": [
        "**/*.css",
        "./src/script/lib/*.js"
      ]
    }
    ```

    The module files in array are "Side Effects", others are "Side Effects free".

The module marked as "Side Effects" should alwasy bundle into target package.

## 3. Enable "dead code check and trim" function

If `usedExports` and `sideEffects` was setup, the "dead code check and trim" function should be enabled in `production` module.

```bash
$ cross-env NODE_ENV=production webpack
```

In `developement` mode, webpack only marked unused imports, the dead codes still reserved in bundle.

Use `terser-webpack-plugin` plugin can remove those dead codes in `developement`.

Install `uglify-js` package

```bash
$ npm install --save-dev uglify-js
```

Config `terser-webpack-plugin` in `webpack.config.js`

```javascript
optimization: {
  usedExports: true,

  providedExports: true,
  sideEffects: true,

  minimize: true,   // enable code minimize
  minimizer: [      // define minimizer plugin
    new TerserPlugin({
      test: /\.m?js$/,    // for all '*.js' files

      // config "uglify-js"
      minify: (file /*, sourceMap */) => {
        const opts = {
          compress: true,   // do code compress
          mangle: false,    // do not shuffle the code
          output: {
            beautify: true  // format the output code
          }
        };
        return require('uglify-js').minify(file, opts);
      }
    })
  ]
}
```
