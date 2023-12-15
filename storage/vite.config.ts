import { defineConfig } from 'vite';
import path from 'path';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';

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
    eslint(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Web Storage',
        description: 'Use PWA make web cache',
        icons: [
          {
            src: '/small-logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/large-logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      devOptions: {
        enabled: true,
        type: 'module'
      }
    })
  ],
  build: {
    target: 'esnext'
  },
  server: {
  }
});
