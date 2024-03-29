# Importing

## 1. Async importing

### 1.1. `import(...)` function

`import(...)` function can import package by async mode.

```javascript
async function sayHello(name) {
  const { default: _ } = await import("lodash");

  const $div = document.createElement("div");
  $div.className = "text-box";
  $div.innerText = _.join(["Hello", name], " ");
  return $div;
}
```

`sayHello` function is an async function, in the function, `lodash` package is import through async mode. the function should execute and return after the package imported.

```javascript
sayHello("Alvin").then($text => {
  // ...
});
```

Call `sayHello` function, wait until the function is return, after that, the `then` block should executed.

### 1.2. Split code

In `webpack.config.js`, set `optimization` `/` `splitChunks` options

```javascript
optimization: {
  // ...,
  moduleIds: "deterministic",
  splitChunks: {
    minSize: 1,     // the minimum size of extracted code in one .js file
    minChunks: 1,   // the maximum size of extracted code in one .js file
    cacheGroups: {
      default: false,   // don"t extracted code if chunks not defined in "cacheGroups"
      common: {
        chunks: "initial",  // code extracted scope("initial", "async", "all")
        name: "common",
        reuseExistingChunk: true  // reuse extracted code
      },
      async: {
        test: /[\\/]node_modules[\\/]/,   // filter, code should be extracted from "node_modules" folder
        chunks: "async",
        name: "async",
        reuseExistingChunk: true
      }
    }
  }
}
```

`moduleIds`: How to generate the ID for bundled resource file, default value is `false`(let webpack choose how to generate ID itself)

- `natural`: Generate ID by file orders.
- `named`: Generate ID for debug(easy to read).
- `deterministic`: Generate ID by hashcode.
- `size`: Generate ID to make sure file size is smaller

`cacheGroup` option is used to explain how common code is extracted between chunks.

- `common`: To extract the common parts from all "initially loaded" chunks(`chunks: "initial"`). the extracted part package a new `.js` file named `common-xxxx.js`(naming rule followed `output` option)

- `async`: To extract the common parts from all "async loaded" chunks(`chunks: "async"`). the extracted part package a new `.js` file named `async-xxxx.js`(naming rule followed `output` option).

For "async" packages, `await import("...")` should load resources from server lazily. For `await import("lodash")` in this demo:

- `lodash` libaray was packaged at `vendor.xxxx.js` bundled file;
- `await import("lodash")` should download `vendor.xxx.js` file lazily.

## 2. Browser hint

### 2.1. `<link>` tag

Browser hint can hint the browser how to load resources.

The `<link>` tag defined the browser hint, like:

```html
<link rel="prefetch" as="script" href="foo.js">
```

Means do prefetched operate for some script resource

### 2.2. Webpack hint comments

```javascript
await import(/* webpackPrefetch: true */ "lodash");
// or
await import(/* webpackPreload: true */ "lodash");
```

The comment `/* webpackPrefetch: true */` and `/* webpackPreload: true */` will tell webpack compiler to create browser hint like this:

```html
<link rel="prefetch" as="script" href="vendor.xxx.js">
<!-- or -->
<link rel="preload" as="script" href="vendor.xxx.js">
```

## 3. Bundle analysis

Use `webpack-bundle-analyzer` to analyse the statistics of all bundles

Install `webpack-bundle-analyzer` package

```bash
npm install --save-dev webpack-bundle-analyzer
```

In `webpack.config.js`, add plugin useage

```javascript
{
  // ...,
  plugins: [
    // ...,
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "../../bundle-report.html",
      generateStatsFile: true,
      statsFilename: "stats.json",
      openAnalyzer: false
    })
  ]
}
```

- `analyzerMode`: `server`, `static`, `json` or `disabled`
  - `server`: Start a http server to show analysis result.
  - `static`: Generate a static HTML file about analysis result.
  - `json`: Generate a json file about analysis result.
  - `disabled`: Do not generate any result file.
- `reportFilename`: Path to bundle report file that will be generated in static mode. It can be either an absolute path or a path relative to a bundle output directory (which is output.path in webpack config).
- `generateStatsFile`: Generate a statistics json file.
- `statsFilename`: Name of generated statistics json file.
- `openAnalyzer`: Open browser to show analysis result.
