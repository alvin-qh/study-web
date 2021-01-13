const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack-common.config');

module.exports = merge(commonConfig, {
  entry: {
    'index': './test/test_index.js'
  },
  output: {
    filename: '[name].test.js',
    path: path.resolve(__dirname, 'dist/test')
  },
  optimization: {
    usedExports: true,
    sideEffects: true
  }
});
