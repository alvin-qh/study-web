# Asset Modules

Asset Modules is a type of module that allows one to use asset files (fonts, icons, etc) without configuring additional loaders.

In script file, assets should be imported like this:

```javascript
import '../style/main.css';   // import css module
import image from '../image/logo.png';  // import image module
import text from '../txt/intro.txt';    // import text module
```

In css file, assets should be imported like this:

```css
.foo {
  ...;
  background-image: url(../image/bar.png);    /* import image module */
}

@font-face {
  ...;
  src: url(../font/bar.woff);     /* import font module */
}
```

In `css` files, static resources are imported primarily through the `url(...)` method, it works as similar as `import` in script code.

Prior to webpack 5 it was common to use:

- `raw-loader`: to import a file as a string.
- `url-loader`: to inline a file into the bundle as a data URI.
- `file-loader`: to emit a file into the output directory.

Asset Modules type replaces all of these loaders by adding 4 new module types:

- `asset/resource`: emits a separate file and exports the URL. Previously achievable by using `file-loader`.
- `asset/inline`: exports a data URI of the asset. Previously achievable by using `url-loader`.
- `asset/source`: exports the source code of the asset. Previously achievable by using `raw-loader`.
- `asset`: automatically chooses between exporting a data URI and emitting a separate file. Previously achievable by using `url-loader` with asset size limit.

## 1. Use Asset Module

To replace loaders by asset modules.

For the following usage of `loader`

```javascript
{
  // ...,
  module: {
    rules: [
      // ...,
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'image/[name]-[contenthash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'font/[name]-[contenthash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.txt$/,
        use: [
          {
            loader: 'raw-loader'
          }
        ]
      }
    ]
  }
}
```

can be replaced by asset module

```javascript
{
  // ...,
  module: {
    // ...,
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        // replaced from 'url-loader'
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // use inline or reference based on this size, 128KB
            maxSize: 128 * 1024
          }
        },
        generator: {
          // the template to genderate filename that to output this file
          filename: 'image/[name]-[contenthash:8][ext]'
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        // replaced from 'file-loader'
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]-[contenthash:8][ext]'
        }
      },
      {
        test: /\.txt$/,
        // replaced from 'raw-loader'
        type: 'asset/source'
      }
    ]
  }
}
```

## 2. Different from Asset Module and loader

### 2.1. Output filename template

The `[ext]` part of output filename template is used differently in `webpack.config.js` files.

For `file-loader` or `url-loader`, the `[ext]` in template do not include `.` separator, the template should set like: `font/[name]-[contenthash:8].[ext]`.

For "Asset Module", the `[ext]` in template include `.` separator already, so the `.` separator , the template should set like: `font/[name]-[contenthash:8][ext]`.

### 2.2. `require` the module

The `require` function is used differently in script files.

For use loader:

```javascript
const asset = require('../image/foo.png').default;
```

For use Asset Module:

```javascript
const asset = require('../image/foo.png');
```
