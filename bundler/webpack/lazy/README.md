# Lazy

## 1. Use async `import` function

Async `import` function import a module and return a `Promise` object, so this module can be import async like this:

```javascript
import("./foo.js")
  .then(({ foo: bar }) => { ... })
  .catch(err => { ... })
  .finally(() => { ... });
```

In the `then` callback function, the arguments list is "live bindings" which need to be imported.

- When more than one "live bindings" need to be imported:

  ```javascript
  import("./foo.js")
    .then(({ 
      foo1: bar1,
      foo2: bar2,
      foo3: bar3
    }) => { ... })
    .catch(err => { ... })
    .finally(() => { ... });
  ```

- When default "live bindings" need to be imported:

  ```javascript
  import("./foo.js")
    .then(({ default: bar }) => { ... })
    .catch(err => { ... })
    .finally(() => { ... });
  ```

- The `import` function can be called like this:

  ```javascript
  import(
    /* webpackChunkName: "page1", 
      webpackPrefetch: true */ 
    "./foo.js"
  ).then( ... ).catch( ... ).finally( ... );
  ```

  - `webpackChunkName`: an annotation that tells webpack the chunk name of corresponding `./foo.js` file after it was bundled.
  - `webpackPrefetch`: an annotation that tells webpack this chunk need to prefetch.

- Also can call `import` with modern grammar

  ```javascript
  async function foo() {
    const { default: _ } = await import("lodash");
  }
  ```

- Also can call `import` with modern grammar

  ```javascript
  async function foo() {
    const { join: _join } = await import("lodash-es");
  }
  ```

- Also can call `import` with modern grammar

  ```javascript
  async function foo() {
    const { 
      join: _join,
      map: _map
    } = await import("lodash-es");
  }
  ```

## 2. About current project

### 2.1. Split chunk

In `webpack.config.js` file:

```javascript
{
  // ...,
  optimization: {
    // ..,
    splitChunks: {
      cacheGroups: {
        // ...,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name: "vendor",
          reuseExistingChunk: true
        }
      }
    }
  }
}
```

Bundle all things that import from `/node_modules` into one bundle file.

### 2.2. Enterpoint

In `webpack.config.js` file:

```javascript
{
  entry: {
    "index": "./src/script/index.js"
  },
  // ...
}
```

In this project, all request should be redirect to `/`, run `index.xxx.js`.

In `./src/script/index.js`, the frontend router should be initialize first

```javascript
(function () {
  route(
    /* root element */,
    /* navigation element */,
    {
      index: {
        title: "Home",
        href: "/",
        module: () => import(/* webpackPrefetch: true */ "./index.js")
      },
      page1: {
        title: "Page1",
        href: "/page-1",
        module: () => import(/* webpackChunkName: "page1", webpackPrefetch: true */ "./page1.js")
      },
      page2: {
        title: "Page2",
        href: "/page-2",
        module: () => import(/* webpackChunkName: "page2", webpackPrefetch: true */ "./page2.js")
      },
      "404": {
        title: "404",
        href: "/404",
        module: () => import(/* webpackChunkName: "404", webpackPrefetch: true */ "./404.js"),
        menu: "hidden"    // do not display on menu
      }
    }
  );
})();
```

The `route` function import form `./router.js`, see `export function route( ... )` function from [./router.js](./src/script/router.js) file

When the page is loaded (or history go back), it is routed to the specified module call based on the current location

```javascript
window.addEventListener("load", _reload);
window.addEventListener("popstate", _reload);
```

See `_reload` function from [./router.js](./src/script/router.js) file

## 3. Debug

This project use "frontend router", so all URL visit should be redirect to `/` (`index.xxx.js`)

In `webpack.config.js` file:

```javascript
{
  // ...,
  devServer: {
    // ...,
    historyApiFallback: true,
    publicPath: "/"
  }
}
```

- `historyApiFallback`: redirect request to `publicPath: "/"`
