const path = require("path");
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack-common.config");

module.exports = merge(commonConfig, {
  entry: {
    "index": "./src/index.spec.js"
  },
  output: {
    filename: "[name].spec.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    usedExports: true,
    sideEffects: true
  }
});
