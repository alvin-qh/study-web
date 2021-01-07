const path = require('path');

const webpackConfig = require('./webpack-common.config');

module.exports = {
  ...webpackConfig,
  entry: {
    'index': './test/test_index.js'
  },
  output: {
    filename: '[name].test.js',
    path: path.resolve(__dirname, 'dist/test'),
    pathinfo: false
  }
};
