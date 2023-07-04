const path = require("path");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const postcss = require("rollup-plugin-postcss");
const postcssCopyAssets = require("postcss-copy-assets");
// const postcssUrl = require("postcss-url");
const babel = require("@rollup/plugin-babel");

module.exports = {
  input: path.resolve(__dirname, 'src/script/index.js'),
  output: {
    file: path.resolve(__dirname, 'dist/asset/index.min.js'),
    format: 'es',
    sourcemap: true
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({
      extensions: ['.css'],
      plugins: [
        // postcssUrl({
        //   url: 'copy',
        //   assetsPath: 'image'
        // })
        postcssCopyAssets([
          {
            base: 'dist/asset/font'
          }
        ])
      ],
      inject: false,  // if 'extract' is true, 'inject' always false
      sourceMap: true,
      modules: true,
      extract: path.resolve(__dirname, 'dist/asset/style/index.min.css')  // extract: 'style/index.min.css'
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    })
  ]
};
