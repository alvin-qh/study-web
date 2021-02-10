import path from 'path';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssUrl from 'postcss-url';
import babel from '@rollup/plugin-babel';

export default {
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
        postcssUrl({
          url: 'copy',
          basePath: path.resolve(__dirname, 'node_modules'),
          assetsPath: 'image'
        })
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
