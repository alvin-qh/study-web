const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
  entry: {
    'index': './src/script/index.js'
  },
  output: {
    filename: 'script/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // "publicPath" for css file
              // "file-loader" copy all files into output folder 'dist', and change url relative to 'dist'
              //      "dist/image/webpack.png" => url("image/webpack.png")
              // "publicPath: '..'" means add '..' to all file url in css
              //      "dist/image/webpack.png" => url("../image/webpack.png")
              publicPath: '..'
            }
          },
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
              name: 'image/[name].[ext]',
              publicPath: ''
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
              name: 'font/[name].[ext]',
              publicPath: ''
            }
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          {
            loader: 'csv-loader'
          }
        ]
      },
      {
        test: /\.(xml)$/,
        use: [
          {
            loader: 'xml-loader'
          }
        ]
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        }
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        }
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        }
      },
    ]
  }
};
