import ESLintPlugin from 'eslint-webpack-plugin';
import { merge } from 'webpack-merge';

import commonConfig from './webpack-common.config.js';

export default merge(commonConfig, {
  plugins: [
    new ESLintPlugin()
  ],
  entry: {
    index: './src/index.ts'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.css', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
});
