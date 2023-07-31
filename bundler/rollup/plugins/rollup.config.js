const path = require("path");
const html = require("@rollup/plugin-html");
// const image = require("@rollup/plugin-image");
const babel = require("@rollup/plugin-babel");
const url = require("@rollup/plugin-url");
const typescript = require("@rollup/plugin-typescript");

module.exports = {
  input: path.resolve(__dirname, "src/script/index.ts"),
  output: {
    dir: "dist",
    format: "es",
    sourcemap: true
  },
  treeshake: "recommended",
  plugins: [
    // image(),
    typescript({
      compilerOptions: {
        lib: ["es5", "es6", "dom"],
        target: "es5",
      }
    }),
    // babel({
    //   babelHelpers: "bundled",
    //   exclude: "node_modules/**"
    // }),
    url({
      limit: 4096,
      fileName: "[name]-[hash][extname]",
      publicPath: "assets/",
      destDir: "dist/assets"
    }),
    html({
      title: "Rollup-Plugins",
      publicPath: "",
      attributes: {
        lang: "en"
      },
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }
      ]
    })
  ]
};
