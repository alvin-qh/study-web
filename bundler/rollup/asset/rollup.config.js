import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: './src/script/index.js',
  output: {
    file: './dist/asset/script/index.min.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    })
  ]
}
