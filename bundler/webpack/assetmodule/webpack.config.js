const { merge } = require('webpack-merge');
const commonConfig = require('./webpack-common.config');


module.exports = merge(commonConfig, {
  entry: {
    index: './src/script/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 128 * 1024
          }
        },
        generator: {
          filename: 'image/[name]-[contenthash:8][ext]'
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]-[contenthash:8][ext]'
        }
      },
      {
        test: /\.txt$/,
        type: 'asset/source'
      }
    ]
  }
});
