/* eslint-disable indent */
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
      mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        // ignoreURLParametersMatching: [/.*/],
        cacheId: 'study-web-storage-cache',
        globPatterns: [],
        // globIgnores: ['static/js/**'],
        navigateFallback: null,
        runtimeCaching: [
          {
            urlPattern: /.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'study-web-storage-req-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 30 * 24 * 60 * 60
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      manifest: {
        name: 'Web Storage',
        description: 'Use PWA make web cache',
        start_url: '/',
        lang: 'en',
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
      selfDestroying: false, // 取消注册
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
