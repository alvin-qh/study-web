import ESLintPlugin from "eslint-webpack-plugin";
import { merge } from "webpack-merge";

import commonConfig from "./webpack-common.config";

export default merge(commonConfig, {
  plugins: [
    new ESLintPlugin()
  ],
  entry: {
    "index": "./src/script/index.ts"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".css", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  }
} as any);
