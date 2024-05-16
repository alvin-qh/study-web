import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: ''
    }
  },
  plugins: [
    react(),
    eslint()
  ]
});
