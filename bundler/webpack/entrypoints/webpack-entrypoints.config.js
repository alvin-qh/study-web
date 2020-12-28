const config = require('./webpack-common.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const entries = {
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
  },
  'common': './src/script/common/common.js'
};

const htmls = [...Object.keys(entries).map(key => {
  if (key === 'common') {
    return null;
  }
  return new HtmlWebpackPlugin({
    title: `Entrypoint Management - ${key}`,
    template: './src/template/index.html',
    filename: `../${key}.html`,
    chunks: ['common', key]
  })
}).filter(entry => entry != null)];

module.exports = {
  ...config,
  entry: entries,
  plugins: [
    ...config.plugins,
    ...htmls
  ],
  optimization: {
    runtimeChunk: 'single'
  }
};
