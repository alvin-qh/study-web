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
    contentBase: path.resolve(__dirname, 'dist'),   // set wwwroot folder
    hot: true,          // 'true' to enable 'HMR' (Hot Module Replacement)
    inline: true,       // 'true' to enable 'inline' mode, add auto reload script into bundle, or 'false' to enable 'iframe' mode
    stats: 'minimal',   // to precisely control what bundle information gets displayed
    // 'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose'
    compress: true,     // use 'gzip' to compress response
    writeToDisk: true   // write bundled files into output folder on disk
  },
  entry: {
    'index': './src/script/index.js',
  }
});
