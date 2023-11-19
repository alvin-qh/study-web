import ESLintPlugin from 'eslint-webpack-plugin';
import { merge } from 'webpack-merge';

import commonConfig from './webpack-common.config.js';

export default merge(commonConfig, {
  plugins: [
    new ESLintPlugin()
  ],
  entry: {
    index: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            presets: [
              '@babel/env'
            ]
          }
        }
      }
    ]
  }
});
