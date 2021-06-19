// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = "style-loader";

const entries = {
  "index": ["./src/index.ts"],
  "layout/container": ["./src/layout/container/index.ts"],
  "layout/boxsizing": ["./src/layout/boxsizing/index.ts"],
  "layout/display": ["./src/layout/display/index.ts"],
  "layout/floating": ["./src/layout/floating/index.ts"],
  "layout/clear-floating": ["./src/layout/clear-floating/index.ts"],
  "layout/object-fit": ["./src/layout/object-fit/index.ts"],
  "layout/object-position": ["./src/layout/object-position/index.ts"],
}

function makeHtmlTemplates() {
  return Object.entries(entries).map(([key, val]) => {
    return new HtmlWebpackPlugin({
      filename: `${key}.html`,
      template: 'index.html',
      inject: true,
      chunks: [key],
      cache: true,
      title: key.replace(/^\S/, s => s.toUpperCase()),
      chunksSortMode(a, b) {
        return chunks.indexOf(a) - chunks.indexOf(b)
      },
      minify: {
        collapseWhitespace: isProduction,
        removeComments: isProduction
      }
    });
  });
}


const config = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isProduction ? 'js/[name]-[chunkhash:8].js' : 'js/[name].js',
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    ...makeHtmlTemplates(),
    new MiniCssExtractPlugin({
      filename: isProduction ? 'css/[name]-[chunkhash:8].css' : 'css/[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.styl$/i,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader", "postcss-loader", "stylus-loader"],
      },
      {
        test: /\.css$/i,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
        generator: {
          filename: "asset/[name][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 15,
          }
        }
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = config
