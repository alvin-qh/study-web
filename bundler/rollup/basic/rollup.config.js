import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  input: path.resolve(__dirname, 'src/script/index.js'),
  output: {
    file: path.resolve(__dirname, 'dist/asset/index.min.js'),
    format: 'cjs',   // format: "umd"
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ],
};
