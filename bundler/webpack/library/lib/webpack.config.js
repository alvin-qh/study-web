const { merge } = require('webpack-merge');

const commonConfig = require('./webpack-common.config');

module.exports = merge(commonConfig, {
  entry: {
    index: './src/index.js'
  },
  output: {
    // name of export library module
    library: 'appLib',

    // how the library exposed
    // "umd" exposes your library under all the module definitions,
    // allowing it to work with CommonJS, AMD and as global variable
    libraryTarget: 'umd'
  },

  // define external modules
  // external modules are not bundled into package
  // to use this bundled package, external modules must be introduce of additional
  externals: {
    'lodash-es': {
      commonjs: 'lodash-es',
      commonjs2: 'lodash-es',
      amd: 'lodash-es',
      root: 'default'
    }
  },
  optimization: {
    usedExports: true,
    sideEffects: true   // enable treeshaking
  }
});
