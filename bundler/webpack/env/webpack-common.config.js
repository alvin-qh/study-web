const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: devMode ? "development" : "production",
  devtool: "cheap-source-map",
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
    path: path.resolve(__dirname, "dist/asset"),
    pathinfo: false
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
      title: "Environment",
      template: "./src/template/index.html",
      filename: `../[name].html`,
      chunks: "all"
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false
          }
        }
      },
      {
        test: /\.css$/i,
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
