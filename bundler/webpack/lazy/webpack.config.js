const commonConfig = require('./webpack-common.config.js');
const { merge } = require('webpack-merge');

const devMode = process.env.NODE_ENV !== 'production';

const modeConfig = devMode ? {
  mode: 'development',
  devtool: 'cheap-source-map'
} : {
    mode: 'production',
    devtool: 'nosources-source-map'
  };

module.exports = merge(commonConfig, modeConfig, {
  devServer: {
    historyApiFallback: true,
    publicPath: '/'
  },
  entry: {
    'index': './src/script/index.js'
  },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      minChunks: 1,
      minSize: 1,
      cacheGroups: {
        default: false,
        // bundle all things from "node_modules" folder into "vender.xxx.js" file
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendor',
          reuseExistingChunk: true
        }
      }
    }
  }
});
