import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import html from '@rollup/plugin-html';
import node from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';
import serve from 'rollup-plugin-dev-server';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';

const isProduction = process.env.NODE_ENV === 'production';
const base = 'http://localhost:3004/';

export default (args) => {
  return {
    input: [
      'src/index.ts'
    ],
    output: {
      dir: 'dist',
      format: 'umd',
      sourcemap: true,
      entryFileNames: isProduction ? 'js/[name][hash].js' : 'js/[name].js',
    },
    treeshake: 'recommended',
    plugins: [
      eslint(),
      node({
        jsnext: true,
        main: true,
        browser: true,
      }),
      typescript(),
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
      postcss({
        plugins: [
          postcssImport(),
          postcssPresetEnv(),
          postcssNested(),
          autoprefixer(),
          cssnano({
            safe: true,
            calc: false
          }),
        ],
        extensions: ['.css', '.less', '.scss'],
        extract: 'css/index.css',
      }),
      url({
        limit: 4096,
        fileName: '[name]-[hash][extname]',
        publicPath: `${base}assets/`,
        destDir: 'dist/assets'
      }),
      html({
        title: 'Rollup-Plugins',
        publicPath: '',
        template: ({ /*attributes, bundle, */files, publicPath, title }) => {
          publicPath = publicPath && `${publicPath}/`;

          const links = (files['css'] || [])
            .filter(f => f.type === 'asset')
            .map(f => `<link type="text/css" rel="stylesheet" href="${publicPath}${f.fileName}" />`);

          const scripts = (files['js'] || [])
            .filter(f => f.type === 'chunk')
            .map(f => `<script src="${publicPath}${f.fileName}"></script>`);

          return `<!DOCTYPE html>
<html>
  <head lang="en">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    ${links}
  </head>
  <body>
    <!-- 注意, 挂在的主容器节点标识不要和外部应用冲突 -->
    <div id="rollup-app"></div>
    ${scripts}
  </body>
</html>
`;
        }
      }),
      replace({
        exclude: 'node_modules/**',
        preventAssignment: true,
        values: {
          ENVIRONMENT: JSON.stringify(process.env.NODE_ENV || 'development'),
          __build_date: () => new Date().toISOString(),
        }
      }),
      (
        args.serve && serve({
          allowCrossOrigin: true, // 允许跨域访问
          contentBase: ['dist'],
          port: 3004,
          open: true,
        })
      ),
      (
        args.serve && livereload('dist')
      ),
    ]
  };
};
