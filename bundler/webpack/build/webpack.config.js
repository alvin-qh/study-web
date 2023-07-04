const path = require("path");
const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

// const threadLoader = require("thread-loader");
const commonConfig = require("./webpack-common.config.js");

const devMode = process.env.NODE_ENV !== "production";

const threadLoaderOpt = {
  workers: 2,
  workerParallelJobs: 5,
  workerNodeArgs: ["--max-old-space-size=1024"],
  poolRespawn: false,
  poolTimeout: 2000,
  poolParallelJobs: 5,
  name: "loader-pool"
};
// threadLoader.warmup(threadLoaderOpt, ["babel-loader"]);

const baseConfig = merge(commonConfig, {
  entry: {
    "index": "./src/script/index.js"
  },
  output: {
    pathinfo: false
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "thread-loader",
            options: threadLoaderOpt
          },
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false
            }
          }
        ]
      }
    ]
  },
  cache: {
    // "memory" or "filesystem", where to save cache
    type: "filesystem",
    store: "pack",
    version: "1",
    // false, true or full path
    cacheDirectory: path.resolve(__dirname, ".cache"),
    hashAlgorithm: "md4",
    name: "build_cache"
  },
  optimization: {
    runtimeChunk: "single",
    moduleIds: "deterministic"
  }
});

module.exports = merge(baseConfig, devMode ?
  {
    mode: "development",
    devtool: "cheap-source-map",
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false
    }
  } : {
    mode: "production",
    devtool: "hidden-source-map",
    plugins: [
      new CssMinimizerPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new CompressionPlugin({
        test: /\.(js|css|html|svg)$/,
        algorithm: "gzip",
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false
      })
    ],
    optimization: {
      splitChunks: {
        minChunks: 1,
        minSize: 1,
        cacheGroups: {
          default: false,
          styles: {
            name: "styles",
            test: /\.css$/,
            chunks: "all",
            enforce: true,
            reuseExistingChunk: true
          },
          vendor: {
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            reuseExistingChunk: true
          }
        }
      }
    }
  }
);
