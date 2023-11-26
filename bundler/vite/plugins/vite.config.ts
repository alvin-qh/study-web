import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import pages from 'vite-plugin-pages';
import solid from 'vite-plugin-solid';

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: ''
    }
  },
  plugins: [
    // Web 开发框架插件
    solid(),
    {
      // ESLint 插件, 在 build 时起作用
      ...eslint(),
      apply: 'build'
    },
    {
      // ESLint 插件, 在 dev 时起作用
      ...eslint({
        failOnError: false
      }),
      enforce: 'post'
    },
    pages({
      // 自动装配路由
      dirs: [
        { dir: path.resolve(__dirname, './src/pages'), baseRoute: '' }
      ],
      extensions: ['tsx', 'md']
    })
  ],
  build: {
    target: 'es6',
    modulePreload: {
      polyfill: false
    }
  }
});
