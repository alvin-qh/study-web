import path from 'path';

import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: path.resolve(__dirname, 'src/script/index.js'),
  output: {
    file: path.resolve(__dirname, 'dist/asset/index.min.js'),
    format: 'es',   // format: 'umd'
    sourcemap: true
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    })
  ]
};
