const webpackConfig = require('./webpack-common.config');

const entries = {
  'index': './src/script/index.js',
  'm1/index': './src/script/m1/index.js',
  'm2/index': './src/script/m2/index.js'
};

module.exports = {
  ...webpackConfig(entries),
  optimization: {
    runtimeChunk: 'single',

    // split chunk into multi-files
    splitChunks: {

      cacheGroups: {
        default: false,   // no 'default' group

        // 'common' group, group same part of all chunks into 'common.xxx.js' file
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true
        }
      }
    }
  }
};
