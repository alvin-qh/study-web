const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist/asset"),
    filename: "script/[name].bundle-[contenthash:8].js",
    chunkFilename: "script/[name].chunk-[contenthash:8].js",
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
      title: "Development",
      template: "./src/template/index.html",
      filename: "../[name].html",
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
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 128 * 1024
          }
        },
        generator: {
          filename: "image/[name]-[contenthash:8][ext]"
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]-[contenthash:8][ext]"
        }
      }
    ]
  }
};
