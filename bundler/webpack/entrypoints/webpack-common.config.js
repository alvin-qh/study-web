const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

// create multiple html entrypoints
function makeHtmlPlugins(entries) {
  // mapping all entites to "HtmlWebpackPlugin" object
  return Object.keys(entries).map(key => {
    // ignore "common" chunk
    if (key === "common") {
      return null;
    }

    // create "HtmlWebpackPlugin" object
    return new HtmlWebpackPlugin({
      title: `Entrypoint Management - ${key}`,    // <title> element in html
      template: "./src/template/index.html",      // location of template file
      filename: `../${key}.html`,   // output filename
      chunks: ["common", key]       // chunks to inject into html file by <script> or <link> elements
    })
  }).filter(entry => entry != null);
}

module.exports = function (entities) {
  return {
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
    entry: entities,
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
      ...makeHtmlPlugins(entities)
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
}
