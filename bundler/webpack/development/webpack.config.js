const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  // or mode: 'production', enable development mode or production mode
  entry: {
    'index': './src/script/index.js',
  },
  devtool: 'inline-source-map',   // add source map inline in source file
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'script/[name].bundle-[hash:8].js',
    chunkFilename: 'script/[name].bundle-[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].bundle-[hash:8].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/template/index.html',
      chunks: 'all'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
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
              name: 'image/[name]-[hash:8].[ext]',
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
              name: 'font/[name]-[hash:8].[ext]',
              publicPath: ''
            }
          }
        ]
      }
    ]
  }
};
