import path from 'path';
import { merge } from 'webpack-merge';

import commonConfig from './webpack-common.config.babel';

export default merge(commonConfig, {
  entry: {
    'index': './src/script/index.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            presets: [
              [
                "@babel/env",
                {
                  targets: {
                    browsers: ['last 3 versions', 'safari >= 7']
                  },
                  modules: false,
                  debug: false,
                  corejs: "2",
                  useBuiltIns: "usage"
                }
              ]
            ]
          }
        }
      }
    ]
  }
});
