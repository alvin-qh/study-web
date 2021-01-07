const path = require('path');

const webpackConfig = require('./webpack-common.config');

module.exports = {
  ...webpackConfig,
  entry: {
    'index': './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    pathinfo: false,

    library: 'appLib',    // name of export libaray module
    libraryTarget: 'umd'  // how the libaray exposed
                          // 'umd' exposes your library under all the module definitions, 
                          // allowing it to work with CommonJS, AMD and as global variable
  },

  // define external modules
  // external modules are not bundled into package
  // to use this bundled package, external modules must be introduce of additional
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
};
