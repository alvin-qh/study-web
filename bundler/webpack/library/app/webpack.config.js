const { default: merge } = require('webpack-merge');

const commonConfig = require('./webpack-common.config');

module.exports = merge(commonConfig, {
  entry: {
    index: './src/script/index.js'
  },
  optimization: {
    usedExports: true,
    sideEffects: true
  }
});
