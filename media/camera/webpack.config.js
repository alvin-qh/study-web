const path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  devtool: 'cheap-source-map',
  entry: {
    index: './src/index.ts'
  },
  resolve: {
    extensions: ['.js', '.ts'], // Cannot add extensions for
    alias: {
      '@': path.resolve('src')
    }
  },
  output: {
    filename: 'js/[name].bundle.[contenthash:8].js',
    chunkFilename: 'js/[name].chunk.[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    pathinfo: false
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      cleanStaleWebpackAssets: false,
      dangerouslyAllowCleanPatternsOutsideProject: true
    }),
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Camera',
      template: './index.html',
      filename: '[name].html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: '/',
      serverSideRender: true
    },
    hot: true,
    compress: true
  }
};
