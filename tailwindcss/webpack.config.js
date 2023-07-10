const path = require("path");
const glob = require("glob");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";


const entries = (() => {
  const entries = {
    "index": ["./src/index.ts"]
  }

  const baseDir = path.join(__dirname, "src");
  const files = glob.sync(path.join(baseDir, "**/index.ts"));

  for (const file of files) {
    let key = path.dirname(path.relative(baseDir, file));
    if (key === '.') {
      key = 'index';
    }
    entries[key] = [`./${path.relative(__dirname, file)}`];
  }
  return entries;
})();
console.log(entries);


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
