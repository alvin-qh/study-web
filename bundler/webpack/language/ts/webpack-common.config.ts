import path from "path";

import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const devMode = process.env.NODE_ENV !== "production";

const config = {
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
      title: "Language-TS",
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
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              name: "image/[name]-[contenthash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              name: "font/[name]-[contenthash:8].[ext]"
            }
          }
        ]
      }
    ]
  }
};

export default config;
