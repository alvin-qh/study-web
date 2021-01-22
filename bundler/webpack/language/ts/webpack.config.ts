import { merge } from 'webpack-merge';

import commonConfig from './webpack-common.config';

export default merge(commonConfig, {
  entry: {
    'index': './src/script/index.ts'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.css', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
});
