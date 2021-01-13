const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack-common.config.js');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = merge(commonConfig, {
  mode: devMode ? 'development' : 'production',
  optimization: {
    runtimeChunk: 'single',
    usedExports: true,
    sideEffects: true
  }
});
