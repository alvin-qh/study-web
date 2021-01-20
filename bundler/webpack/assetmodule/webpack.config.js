const path = require('path');
const commonConfig = require('./webpack-common.config.js');

const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
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
