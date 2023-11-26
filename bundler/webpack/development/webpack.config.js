const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack-common.config.js');

const devMode = process.env.NODE_ENV !== 'production';

// see also: https://webpack.js.org/guides/development/
module.exports = merge(commonConfig, {
  // set package mode
  mode: devMode ? 'development' : 'production',

  // set source map generator
  devtool: 'cheap-source-map',

  // see also: https://webpack.js.org/configuration/dev-server
  // set options of develope server
  devServer: {
    static: {
      // set wwwroot folder
      directory: path.join(__dirname, 'dist'),
    },
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: '/',
      serverSideRender: true,
      stats: 'minimal', // "none" | "errors-only" | "minimal" | "normal" | "verbose"
      // "none" | "errors-only" | "minimal" | "normal" | "verbose"
      writeToDisk: true, // write bundled files into output folder on disk
    },
    hot: true, // "true" to enable "HMR" (Hot Module Replacement)
    compress: true, // use "gzip" to compress response
  },
  entry: {
    index: './src/script/index.js',
  }
});
