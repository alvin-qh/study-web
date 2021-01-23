const path = require('path');
const { default: merge } = require('webpack-merge');

const commonConfig = require('./webpack-common.config.js');

const devMode = process.env.NODE_ENV !== 'development';

module.exports = merge(commonConfig, {
  mode: devMode ? 'development' : 'production',  // enable development mode or production mode
  entry: {
    'index': './src/script/index.js',
  },
  optimization: {
    usedExports: true,
    sideEffects: true
  }
});
