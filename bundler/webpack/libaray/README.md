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

The demo import `lodash` libaray, it does not need to be included in the target package.

Use `externals` option to define which libaray need excluded and how to import it in target js

```javascript
{
  // ...,
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
}
```

- `externals` > `lodash`: Exclude `lodash` libaray in target package.
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
