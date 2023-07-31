const path = require("path");
const resolve = require("@rollup/plugin-node-resolve");
const babel = require("@rollup/plugin-babel");

module.exports = {
  input: path.resolve(__dirname, "src/script/index.js"),
  output: {
    file: path.resolve(__dirname, "dist/asset/index.min.js"),
    format: "cjs",   // format: "umd"
    sourcemap: true
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**"
    })
  ]
};
