const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

const entries = {
  "index": ["./src/index.ts"],
  "layout/container": ["./src/layout/container/index.ts"],
  "layout/boxsizing": ["./src/layout/boxsizing/index.ts"],
  "layout/display": ["./src/layout/display/index.ts"],
  "layout/floating": ["./src/layout/floating/index.ts"],
  "layout/clear-floating": ["./src/layout/clear-floating/index.ts"],
  "layout/object-fit": ["./src/layout/object-fit/index.ts"],
  "layout/object-position": ["./src/layout/object-position/index.ts"],
  "flex/direction": ["./src/flex/direction/index.ts"],
  "flex/wrap": ["./src/flex/wrap/index.ts"],
  "flex/scale": ["./src/flex/scale/index.ts"],
  "flex/grow": ["./src/flex/grow/index.ts"],
  "flex/shrink": ["./src/flex/shrink/index.ts"],
  "flex/order": ["./src/flex/order/index.ts"],
  "box-alignment/justify-content": ["./src/box-alignment/justify-content/index.ts"],
  "box-alignment/justify-items": ["./src/box-alignment/justify-items/index.ts"],
  "box-alignment/justify-self": ["./src/box-alignment/justify-self/index.ts"],
  "box-alignment/align-content": ["./src/box-alignment/align-content/index.ts"],
  "box-alignment/align-items": ["./src/box-alignment/align-items/index.ts"],
  "box-alignment/align-self": ["./src/box-alignment/align-self/index.ts"],
  "box-alignment/place-content": ["./src/box-alignment/place-content/index.ts"],
  "box-alignment/place-items": ["./src/box-alignment/place-items/index.ts"],
  "box-alignment/place-self": ["./src/box-alignment/place-self/index.ts"],
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
  mode: isProduction ? "production" : "development",
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
    new webpack.ProgressPlugin(),
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
  optimization: {
    minimize: isProduction,
    usedExports: true,
    providedExports: true,
    sideEffects: true,
    removeEmptyChunks: true,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 3,
          reuseExistingChunk: true,
        }
      }
    }
  }
};

module.exports = config
