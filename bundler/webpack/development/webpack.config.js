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
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    inline: true,
    stats: 'minimal',
    compress: true,
    writeToDisk: true
  },
  output: {
    path: path.resolve(__dirname, 'dist/asset'),
    filename: 'script/[name].bundle-[contenthash:8].js',
    chunkFilename: 'script/[name].chunk-[contenthash:8].js'
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ['../**/*'],
      dangerouslyAllowCleanPatternsOutsideProject: true
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].bundle-[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/template/index.html',
      filename: '../[name].html',
      chunks: 'all'
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
              publicPath: '../'
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
  }
};