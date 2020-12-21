# Asset management

## 1. css bundler

- Install dependencies

  ```bash
  $ npm install --save-dev style-loader css-loader
  ```

- Config `module > rules`, add loaders

  ```javascript
  module: {
    rules: [
      // ...,
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
  ```

  The `css-loader` load all css content from every chunk, then js can import css file like `import 'a/b/c.css'`

## 2. Images or fonts asset

- Install dependencies

  ```bash
  $ npm install --save-dev file-loader url-loader
  ```

- Config `module > rules`, add loaders

  ```javascript
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
              name: 'image/[name].[ext]',
              publicPath: ''
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
              name: 'font/[name].[ext]',
              publicPath: ''
            }
          }
        ]
      }
    ]
  }
  ```

  All file reference in javascript or css, would be copy to `output` folder with name defined in loaders option.

  In javascript

  ```javascript
  import image from '../image/webpack.png';
  ```

  In CSS

  ```css
  .image-box2 {
    /* ... */
    background-image: url(../image/webpack.png);
    background-size : cover;
  }
  ```

## 3. Other data

Load other data, include `csv`, `xml`, `yaml`, `toml` and `json5`

### 3.1. Data loader

Use data loader to load `csv` and `xml` as object (`Array` or `Dict`)

- Install dependencies

  ```bash
  $ npm install --save-dev csv-loader xml-loader
  ```

- Config `module > rules`, add loaders

  ```javascript
  module: {
    rules: [
      // ...,
      {
        test: /\.(csv|tsv)$/,
        use: [
          {
            loader: 'csv-loader'
          }
        ]
      },
      {
        test: /\.(xml)$/,
        use: [
          {
            loader: 'xml-loader'
          }
        ]
      }
    ]
  }
  ```

  In javascript

  ```javascript
  import csv from '../data/data.csv';
  import xml from '../data/data.xml';
  ```

### 3.2. Data parser

Use data parser to parse `yaml`, `toml` and `json5` to json object

- Install dependencies

  ```bash
  $ npm install --save-dev toml yamljs json5
  ```

- Config `module > rules`, add parsers

  ```javascript
  module: {
    rules: [
      // ...,
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        }
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        }
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        }
      }
    ]
  }
  ```

  In javascript

  ```javascript
  import toml from '../data/data.toml';
  import yaml from '../data/data.yaml';
  import json5 from '../data/data.json5';
  ```
