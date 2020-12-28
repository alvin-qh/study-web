const config = require('./webpack-common.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const entries = {
  'index': './src/script/index.js',
  'm1/index': './src/script/m1/index.js',
  'm2/index': './src/script/m2/index.js'
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
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        default: false,
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
        }
      }
    }
  }
};
