const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack-common.config.js');

module.exports = merge(commonConfig, {
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    usedExports: true,
    sideEffects: true
  }
});
