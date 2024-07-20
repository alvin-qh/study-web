# Create Libaray

## 1. Build as libaray

### 1.1. Exposed as libaray

In `webpack.config.js`, add `libaray` and `libarayTarget` in `output` option

```javascript
{
  // ...,
  output: {
    // ...,
    library: 'appLib',
    libraryTarget: 'umd'
  }
}
```

- `appLib`: Name of export libaray
- `libraryTarget`: How the libaray exposed
  - `var`: Expose as global variable, use `<script>` tag to import.
  - `this`：Available through the `this` object.
  - `window`：Available through the `window` object, in the browser.
  - `umd`: Available after `AMD` or `CommonJS` require.

### 1.2. Exclude vendor libaries

This demo was import `lodash-es` package, it does not need to be included in the target package.

Use `externals` option to define which package need excluded and how to import it in target js

```javascript
{
  // ...,
  externals: {
    'lodash-es': {
      commonjs: 'lodash-es',
      commonjs2: 'lodash-es',
      amd: 'lodash-es',
      root: '_'   // ?
    }
  }
}
```

- `externals` > `lodash-es`: Exclude `lodash-es` libaray in target package.
- `commonjs`, `commonjs2`, `amd`, `root`: How the target js to import the libaray, and which symbol to use.

## 2. Define the entrypoint and module

In `package.json`, define the `CommonJS` entrypoint file and ES6 entrypoint file.

```json
{
  ...
  "main": "dist/index.js",
  "module": "src/index.js",
  ...
}
```

- `main`: The `CommonJS` entrypoint, import all things into target js file.
- `module`: The `ES6` entrypoint, use treeshake to import the content.

## 3. Enable Tree Shaking

Enable "Tree Shaking" and mark the module as "side effects free":

- The other packages which import some module from this package can enable tree shaking feature to delete the some dead code.
- This package should delete some dead code where import from `/node_modules` or other third part libaray.

Enable "Tree Shaking" in `webpack.config.js`

```javascript
{
  // ...,
  optimization: {
    usedExports: true,
    sideEffects: true
  }
}
```

The `optimization.sideEffects` tell compiler to check `sideEffects` option in `package.json`

In `package.json` file

```json
{
  ...,
  "sideEffects": false
}
```

`"sideEffects": false` means this package is 'side effects free`, it can be import 
