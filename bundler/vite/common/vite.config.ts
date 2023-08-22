import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import eslint from "vite-plugin-eslint";
import pages from "vite-plugin-pages";
import path from "path";

export default defineConfig({
  plugins: [
    solid(),
    {
      ...eslint(),
      fix: true,
    },
    pages({
      dirs: [
        { dir: path.resolve(__dirname, "./src/pages"), baseRoute: "" },
      ],
      extensions: ["tsx", "md"],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: {
      polyfill: false
    }
  }
});
