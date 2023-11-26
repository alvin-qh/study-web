import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import solid from "vite-plugin-solid";

export default defineConfig({
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [
    solid(),
    eslint()
  ]
});
