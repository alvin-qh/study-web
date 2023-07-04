const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: "text/html" },
      publicPath: "/",
      serverSideRender: true,
      writeToDisk: true,
    },
    hot: true,
    compress: true,
  },
  output: {
    filename: "script/[name].bundle-[contenthash:8].js",
    chunkFilename: "script/[name].chunk-[contenthash:8].js",
    path: path.resolve(__dirname, "dist/asset")
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ["../**/*"],
      dangerouslyAllowCleanPatternsOutsideProject: true
    }),
    new MiniCssExtractPlugin({
      filename: "style/[name].bundle-[contenthash:8].css"
    }),
    new HtmlWebpackPlugin({
      title: "Build",
      template: "./src/template/index.html",
      filename: `../[name].html`
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  }
};
