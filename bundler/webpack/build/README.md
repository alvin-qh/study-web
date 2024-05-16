# Build

Use environment variables `NODE_ENV` to control webpack compile mode.

- `cross-env NODE_ENV=development`
  - set webpack `mode` is 'development'.
  - do not uglified output bundle.
  - do not optimize output bundle.
  - use cheap source map.
- `cross-env NODE_ENV=production`: set `mode` is `production`
  - set webpack `mode` is 'production'.
  - uglified output bundle.
  - optimize output bundle.
  - use nosource source map.

## 1. Use cache

Use cache to speed up compile process

```javascript
{
  // ...,
  cache: {
    type: 'filesystem',
    store: 'pack',
    version: '1',
    cacheDirectory: path.resolve(__dirname, '.cache'),
    hashAlgorithm: 'md4',
    name: 'build_cache'
  }
}
```

- `cache`: an object to set cache options, `cache: false` means disable cache.
- `cache.type`: `memory` or `filesystem`, the location to save cache. default location is `memory`.
- `cache.store`: tells webpack when to store data on the file system. `store='pack'` means store data when compiler is idle in a single file for all cached items. it only available when `type='filesystem'`.
- `cacheDirectory`: base directory for the cache. defaults to `node_modules/.cache/webpack`. it only available when `type='filesystem'`.
- `hashAlgorithm`: algorithm used the hash generation. defaults to `md4`. it only available when `type='filesystem'`.

## 2. Use parallel

Put `thread-loader` in front of other loaders. The following loaders run in a worker pool.

Loaders running in a worker pool are limited. like:

- Loaders cannot emit files.
- Loaders cannot use custom loader API (i.e. by plugins).
- Loaders cannot access the webpack options.

> Each worker is a separate node.js process, which has an overhead of **~600ms**. There is also an overhead of inter-process communication.
>
> Use this loader only for expensive operations!

Define options for `thread-loader`

```javascript
const threadLoaderOpt = {
  workers: 2,
  workerParallelJobs: 5,
  workerNodeArgs: ['--max-old-space-size=1024'],
  poolRespawn: false,
  poolTimeout: 2000,
  poolParallelJobs: 5,
  name: 'loader-pool'
};
```

Warmup thread pool by loaders

```javascript
threadLoader.warmup(threadLoaderOpt, [
  'babel-loader',
  // ... other loaders
]);
```

Use `thread-loader` plugin

```javascript
{
  // ...,
  module: {
    rules: [
      {
        // ...,
        use: [
          {
            loader: 'thread-loader',
            options: threadLoaderOpt
          },
          {
            loader: 'babel-loader',
            // ...
          },
          {
            loader: 'other-loader',
            // ...
          }
        ]
      }
    ]
  }
}
```

## 3. Optimization

### 3.1. In `development` mode

Use less optimization options can speed up compile process

```javascript
{
  // ...,
  devtool: 'cheap-source-map',
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  }
}
```

- `devtool`: `cheap-source-map`, generate source map with source code.

### 3.2. In `production` mode

Use more optimization options to make package size is smallest

```javascript
{
  // ...,
  devtool: 'hidden-source-map',
  optimization: {
    splitChunks: {
      minChunks: 1,
      minSize: 1,
      cacheGroups: {
        default: false,
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
          reuseExistingChunk: true
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          reuseExistingChunk: true
        }
      }
    }
  }
}
```

- `devtool`: `hidden-source-map`, generate source map but hide source code.
- `optimization.splitChunks.cacheGroups.styles`: bundle all css into one `.css` file
- `optimization.splitChunks.cacheGroups.vendor`: bundle all code from `/node_modules/` folder into one `.js` file


## 4. Uglified css file

In `production` mode, use `compression-webpack-plugin` plugin

```javascript
{
  // ...,
  plugins: [
    // ...,
    new CssMinimizerPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    })
  ]
}
```

## 5. Gzip compression

### 5.1. Compress output bundles

Use `compression-webpack-plugin` to compress output bundles

```javascript
{
  // ...,
  plugins: [
    // ...,
    new CompressionPlugin({
      test: /\.(js|css|html|svg)$/,
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false
    })
  ]
}
```

### 5.2. Config nginx gateway

The `ngx_http_gzip_static_module` module allows sending precompressed files with the `.gz` filename extension instead of regular files.

This module is not built by default, it should be enabled with the `--with-http_gzip_static_module` configuration parameter.

- Example Configuration

```conf
gzip_static  on;
gzip_proxied expired no-cache no-store private auth;
```

- Directives

```plain
Syntax: gzip_static on | off | always;
Default: gzip_static off;
Context: http, server, location
```
