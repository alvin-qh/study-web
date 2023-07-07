const path = require("path");
const { override, fixBabelImports, /* addWebpackAlias, */ addPostcssPlugins, overrideDevServer, /* addBabelPlugin */ } = require("customize-cra");
const { alias, configPaths } = require("react-app-rewire-alias");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  webpack: override(
    config => {
      config.devtool = false;

      if (process.env.COMPRESS_USE_GZIP === "true") {
        config.plugins.push(
          new CompressionWebpackPlugin({
            test: /\.(js|css)$/,
            threshold: 1024
          })
        )
      }
      config.resolve = {
        ...config.resolve,
        extensions: [".js", ".json", ".ts", ".tsx"]
      }

      return alias(configPaths("./tsconfig.paths.json"))(config);
    },
    // addWebpackAlias({
    //   "~": path.join(__dirname, ".", "src"),
    //   "~pages": path.join(__dirname, ".", "src/pages"),
    //   "~components": path.join(__dirname, ".", "src/components")
    // }),
    fixBabelImports("import", []),
    addPostcssPlugins([
      require("postcss-fixes"),
      require("tailwindcss"),
      // require("postcss-pxtorem")({
      //   rootValue: 75,
      //   propList: ["*"],
      //   minPixelValue: 2,
      //   selectorBlackList: ["am-"]
      // }),
      require("autoprefixer")
    ]),
    // addBabelPlugin([
    //   "babel-plugin-root-import",
    //   {
    //     rootPathSuffix: "src"
    //   }
    // ])
  ),
  devServer: overrideDevServer(
    config => {
      return {
        ...config
      }
    }
  )
};
