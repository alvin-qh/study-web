const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
  mode: 'development',
  entry: {
    src: './src/assets/js/common/common.js'
  },
  resolve: {
    alias: {
    },
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          }
        ]
      }, {
        test: /\.(less|css)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10240,
              name: 'static/fonts/[name].[ext]',
              publicPath: '/'
            }
          }
        ]
      }, {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10240,
              name: 'static/images/[name].[ext]',
              publicPath: '/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanupPlugin()
  ],
  devServer: {
    contentBase: path.resolve('www/')
  },
  devtool: 'cheap-source-map',
};
