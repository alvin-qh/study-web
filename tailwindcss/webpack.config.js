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
  "grid/template-columns": ["./src/grid/template-columns/index.ts"],
  "grid/column-start-end": ["./src/grid/column-start-end/index.ts"],
  "grid/template-rows": ["./src/grid/template-rows/index.ts"],
  "grid/row-start-end": ["./src/grid/row-start-end/index.ts"],
  "grid/auto-flow": ["./src/grid/auto-flow/index.ts"],
  "grid/auto-columns": ["./src/grid/auto-columns/index.ts"],
  "grid/auto-rows": ["./src/grid/auto-rows/index.ts"],
  "grid/gap": ["./src/grid/gap/index.ts"],
  "box-alignment/justify-content": ["./src/box-alignment/justify-content/index.ts"],
  "box-alignment/justify-items": ["./src/box-alignment/justify-items/index.ts"],
  "box-alignment/justify-self": ["./src/box-alignment/justify-self/index.ts"],
  "box-alignment/align-content": ["./src/box-alignment/align-content/index.ts"],
  "box-alignment/align-items": ["./src/box-alignment/align-items/index.ts"],
  "box-alignment/align-self": ["./src/box-alignment/align-self/index.ts"],
  "box-alignment/place-content": ["./src/box-alignment/place-content/index.ts"],
  "box-alignment/place-items": ["./src/box-alignment/place-items/index.ts"],
  "box-alignment/place-self": ["./src/box-alignment/place-self/index.ts"],
  "spacing/padding": ["./src/spacing/padding/index.ts"],
  "spacing/margin": ["./src/spacing/margin/index.ts"],
  "spacing/between": ["./src/spacing/between/index.ts"],
  "sizing/width": ["./src/sizing/width/index.ts"],
  "sizing/min-width": ["./src/sizing/min-width/index.ts"],
  "sizing/max-width": ["./src/sizing/max-width/index.ts"],
  "sizing/height": ["./src/sizing/height/index.ts"],
  "sizing/min-height": ["./src/sizing/min-height/index.ts"],
  "sizing/max-height": ["./src/sizing/max-height/index.ts"],
  "typesetting/font-family": ["./src/typesetting/font-family/index.ts"],
  "typesetting/font-size": ["./src/typesetting/font-size/index.ts"],
  "typesetting/font-smooth": ["./src/typesetting/font-smooth/index.ts"],
  "typesetting/font-style": ["./src/typesetting/font-style/index.ts"],
  "typesetting/font-weight": ["./src/typesetting/font-weight/index.ts"],
  "typesetting/font-variant-numeric": ["./src/typesetting/font-variant-numeric/index.ts"],
  "typesetting/letter-spacing": ["./src/typesetting/letter-spacing/index.ts"],
  "typesetting/line-height": ["./src/typesetting/line-height/index.ts"],
  "typesetting/list-style": ["./src/typesetting/list-style/index.ts"],
  "typesetting/list-position": ["./src/typesetting/list-position/index.ts"],
  "typesetting/placeholder-color": ["./src/typesetting/placeholder-color/index.ts"],
  "typesetting/placeholder-opacity": ["./src/typesetting/placeholder-opacity/index.ts"],
  "typesetting/text-align": ["./src/typesetting/text-align/index.ts"],
  "typesetting/text-color": ["./src/typesetting/text-color/index.ts"],
  "typesetting/text-opacity": ["./src/typesetting/text-opacity/index.ts"],
  "typesetting/text-decoration": ["./src/typesetting/text-decoration/index.ts"],
  "typesetting/text-transform": ["./src/typesetting/text-transform/index.ts"],
  "typesetting/text-overflow": ["./src/typesetting/text-overflow/index.ts"],
  "typesetting/vertical-align": ["./src/typesetting/vertical-align/index.ts"],
  "typesetting/white-space": ["./src/typesetting/white-space/index.ts"],
  "typesetting/word-break": ["./src/typesetting/word-break/index.ts"],
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
    publicPath: '/'
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
        test: /\.(eot|svg|ttf|woff|woff2|otf|png|jpg|gif)$/i,
        type: "asset/resource",
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
}

module.exports = config
