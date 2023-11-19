import inject from "@rollup/plugin-inject";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    eslint({
      include: [
        "src/**/*.ts",
        "src/**/*.vue"
      ]
    }),
    inject({
      $: "jquery",
      jQuery: "jquery",
    }),
    vue()
  ],
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
});
