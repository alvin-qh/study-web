import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { defineConfig } from 'vite';

import eslint from 'vite-plugin-eslint';
import pages from 'vite-plugin-pages';
import solid from 'vite-plugin-solid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  css: { preprocessorOptions: {} },
  plugins: [
    // Web 开发框架插件
    solid(),
    {
      // ESLint 插件, 在 build 时起作用
      ...eslint(),
      apply: 'build',
    },
    {
      // ESLint 插件, 在 dev 时起作用
      ...eslint({ failOnError: false }),
      enforce: 'post',
    },
    pages({
      // 自动装配路由
      dirs: [
        { dir: path.resolve(__dirname, './src/pages'), baseRoute: '' },
      ],
      extensions: ['tsx', 'md'],
    }),
  ],
  build: {
    target: 'es6',
    modulePreload: { polyfill: false },
  },
});
