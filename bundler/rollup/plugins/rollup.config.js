import { fileURLToPath } from 'node:url';
import path from 'node:path';

import nodeResolve from '@rollup/plugin-node-resolve';
// import pluginEslint from '@rollup/plugin-eslint';
import pluginHtml from '@rollup/plugin-html';
// import pluginImage from '@rollup/plugin-image';
// import pluginBabel from @rollup/plugin-babel';
import pluginCommonJs from '@rollup/plugin-commonjs';
import pluginLiveReload from 'rollup-plugin-livereload';
import pluginPostCss from 'rollup-plugin-postcss';
import pluginReplace from '@rollup/plugin-replace';
import pluginServe from 'rollup-plugin-serve';
import pluginTs from '@rollup/plugin-typescript';
import pluginUrl from '@rollup/plugin-url';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postCssImport from 'postcss-import';
import postCssNested from 'postcss-nested';
import postCssPresetEnv from 'postcss-preset-env';
import tailwindcss from '@tailwindcss/postcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 官方插件参考: https://github.com/rollup/plugins

const isProduction = process.env.NODE_ENV === 'production';

export default (args)=> {
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
      // pluginImage(),
      // pluginEslint(),
      // TS 插件, 默认读取 tsconfig.json 配置, 参考: https://github.com/rollup/plugins/tree/master/packages/typescript
      pluginTs(),
      // 为 commonjs 风格脚本提供支持, 参考: https://github.com/rollup/plugins/tree/master/packages/commonjs
      pluginCommonJs(),
      // css 预处理插件, 参考: https://github.com/egoist/rollup-plugin-postcss
      pluginPostCss({
        plugins: [
          tailwindcss(),
          autoprefixer(),
          cssnano({
            safe: true,
            calc: false,
          }),
          postCssImport(),
          postCssNested(),
          postCssPresetEnv(),
        ],
        extensions: ['.css', '.less', '.scss'],
        extract: true,
      }),
      // Babel 插件, 用于将 ES6 以上代码转为 ES5 代码, 参考: https://github.com/rollup/plugins/tree/master/packages/typescript
      // pluginBabel(),
      // 模块解析插件, 参考: https://github.com/rollup/plugins/tree/master/packages/node-resolve
      nodeResolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      // 处理代码中的资源连接 (例如图片), 参考: https://github.com/rollup/plugins/tree/master/packages/url
      pluginUrl({
        limit: 4096,
        fileName: '[name]-[hash][extname]',
        publicPath: 'assets/',
        destDir: 'dist/assets',
      }),
      // 生成入口 HTML 文件, 参考: https://github.com/rollup/plugins/tree/master/packages/html
      pluginHtml({
        title: 'Rollup-Plugins',
        publicPath: '',
        attributes: {lang: 'en'},
        meta: [
          {charset: 'utf-8'},
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
        ],
      }),
      // 替换代码中的指定标识, 参考: https://github.com/rollup/plugins/tree/master/packages/replace
      pluginReplace({
        exclude: 'node_modules/**',
        // 防止替换赋值运算符左边的标识
        preventAssignment: true,
        values: {
          ENVIRONMENT: JSON.stringify(process.env.NODE_ENV || 'development'),
          // 将代码中的 __build_date 标识转换为当前时间, 参考: src/script/index.ts 文件中 __build_date 的使用
          __build_date: () => new Date().toISOString(),
        },
      }),
      (
        // 如果传递 --serve 参数, 则加入插件用于启动测试服务器, 参考: https://github.com/thgh/rollup-plugin-serve
        args.serve && pluginServe('dist')
      ),
      (
        // 动态重新价值代码, 参考: https://github.com/thgh/rollup-plugin-livereload
        args.serve && pluginLiveReload('dist')
      ),
    ],
  };
};
