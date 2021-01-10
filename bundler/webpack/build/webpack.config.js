const path = require('path');

const threadLoader = require('thread-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackConfig = require('./webpack-common.config.js');


// threadLoader.warmup({
//   workers: 2,
//   workerParallelJobs: 50,
//   workerNodeArgs: ['--max-old-space-size=1024'],
//   poolRespawn: false,
//   poolTimeout: 2000,
//   poolParallelJobs: 50,
//   name: 'css-loader-pool'
// }, [
//   MiniCssExtractPlugin.loader,
//   'css-loader',
//   'url-loader'
// ]);

module.exports = {
  ...webpackConfig,
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'thread-loader',
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'image/[name]-[contenthash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'font/[name]-[contenthash:8].[ext]'
            }
          }
        ]
      }
    ]
  },

  cache: {

    // 'memory' or 'filesystem', where to save cache
    type: 'filesystem',

    store: 'pack',

    version: '1',

    // false, true or full path
    cacheDirectory: path.resolve(__dirname, '.cache'),

    hashAlgorithm: 'md4',

    name: 'build_cache'
  }
};
