const path = require('path');
const html = require('@rollup/plugin-html');
// const image = require("@rollup/plugin-image");
// const babel = require("@rollup/plugin-babel");
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const eslint = require('@rollup/plugin-eslint');
const replace = require('@rollup/plugin-replace');
const url = require('@rollup/plugin-url');
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');

// 官方插件参考: https://github.com/rollup/plugins

const isProduction = process.env.NODE_ENV === 'production';

module.exports = (args) => {
  return {
    input: path.resolve(__dirname, 'src/script/index.ts'),
    output: {
      // 输出目标路径
      dir: 'dist',
      // 输出 js 格式, 参考: https://rollupjs.org/configuration-options/#output-format
      format: 'iife',
      sourcemap: true,
      entryFileNames: isProduction ? '[name][hash].js' : '[name].js',
    },
    treeshake: 'recommended',
    plugins: [
      // image(),
      eslint(),
      // TS 插件, 默认读取 tsconfig.json 配置, 参考: https://github.com/rollup/plugins/tree/master/packages/typescript
      typescript(),
      // 为 commonjs 风格脚本提供支持, 参考: https://github.com/rollup/plugins/tree/master/packages/commonjs
      commonjs(),
      // css 预处理插件, 参考: https://github.com/egoist/rollup-plugin-postcss
      postcss({
        plugins: [
          require('tailwindcss')(),
          require('autoprefixer')(),
          require('cssnano')({
            safe: true,
            calc: false
          }),
          require('postcss-import')(),
          require('postcss-nested')(),
          require('postcss-preset-env')(),
        ],
        extensions: ['.css', '.less', '.scss'],
        extract: true,
      }),
      // Babel 插件, 用于将 ES6 以上代码转为 ES5 代码, 参考: https://github.com/rollup/plugins/tree/master/packages/typescript
      // babel(),
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      // 处理代码中的资源连接 (例如图片), 参考: https://github.com/rollup/plugins/tree/master/packages/url
      url({
        limit: 4096,
        fileName: '[name]-[hash][extname]',
        publicPath: 'assets/',
        destDir: 'dist/assets'
      }),
      // 生成入口 HTML 文件, 参考: https://github.com/rollup/plugins/tree/master/packages/html
      html({
        title: 'Rollup-Plugins',
        publicPath: '',
        attributes: {
          lang: 'en'
        },
        meta: [
          {
            charset: 'utf-8',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
          }
        ]
      }),
      // 替换代码中的指定标识, 参考: https://github.com/rollup/plugins/tree/master/packages/replace
      replace({
        exclude: 'node_modules/**',
        // 防止替换赋值运算符左边的标识
        preventAssignment: true,
        values: {
          ENVIRONMENT: JSON.stringify(process.env.NODE_ENV || 'development'),
          // 将代码中的 __build_date 标识转换为当前时间, 参考: src/script/index.ts 文件中 __build_date 的使用
          __build_date: () => new Date().toISOString(),
        }
      }),
      (
        // 如果传递 --serve 参数, 则加入插件用于启动测试服务器, 参考: https://github.com/thgh/rollup-plugin-serve
        args.serve && require('rollup-plugin-serve')('dist')
      ),
      (
        // 动态重新价值代码, 参考: https://github.com/thgh/rollup-plugin-livereload
        args.serve && require('rollup-plugin-livereload')('dist')
      ),
    ]
  };
};
