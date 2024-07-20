const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack-common.config');

module.exports = merge(commonConfig, {
  optimization: {
    runtimeChunk: 'single',

    usedExports: true,

    providedExports: true,
    sideEffects: true,

    minimize: true,       // enable code minimize
    minimizer: [          // define minimizer plugin
      new TerserPlugin({
        test: /\.m?js$/,    // for all "*.js" files

        // config "uglify-js"
        minify: (file /* , sourceMap */) => {
          const opts = {
            compress: true,   // do code compress
            mangle: false,    // do not shuffle the code
            output: {
              beautify: true  // format the output code
            }
          };
          // eslint-disable-next-line global-require
          return require('uglify-js').minify(file, opts);
        }
      })
    ]
  }
});
