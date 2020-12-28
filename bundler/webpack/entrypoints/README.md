# Entrypoints

## 1. Make entrypoints

- Entrypoints object

  ```javascript
  const entries = {
    'common': './src/script/common/common.js',
    'index': {
      import: './src/script/index.js',
      dependOn: 'common'
    },
    'm1/index': {
      import: './src/script/m1/index.js',
      dependOn: 'common'
    },
    'm2/index': {
      import: './src/script/m2/index.js',
      dependOn: 'common'
    }
  };
  ```

  - `dependOn`: This chunk depend on to other chunk, those chunks are not bundle together

- Make html bundlers

  ```javascript
  const htmls = [...Object.keys(entries).map(key => {
    if (key === 'common') {
      return null;
    }
    return new HtmlWebpackPlugin({
      title: `Entrypoint Management - ${key}`,
      template: './src/template/index.html',
      filename: `../${key}.html`, // html filename, use entry key
      chunks: ['common', key]     // bundle chunks together
    })
  }).filter(entry => entry != null)];
  ```
