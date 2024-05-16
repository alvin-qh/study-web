const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      },
      {
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
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 128 * 1024
          }
        },
        generator: {
          filename: 'image/[name]-[contenthash:8][ext]'
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]-[contenthash:8][ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  devServer: {
    contentBase: path.resolve('www/')
  },
  devtool: 'cheap-source-map',
};
