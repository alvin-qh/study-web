const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    inline: true,
    stats: 'minimal',
    compress: true,
    writeToDisk: true
  },
  entry: {
    'index': './src/script/index.js'
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ['../**/*'],
      dangerouslyAllowCleanPatternsOutsideProject: true  // Allow clean patterns outside of process.cwd()
    }),
    new HtmlWebpackPlugin({
      title: 'Resources',
      template: './src/template/index.html',
      filename: '../[name].html',
      chunks: 'all'
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].bundle-[contenthash:8].css'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist/asset'),
    filename: 'script/[name].bundle-[contenthash:8].js',
    chunkFilename: 'script/[name].bundle-[contenthash:8].js',
    pathinfo: false
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false
          }
        }
      },
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
    ]
  },
  optimization: {
    runtimeChunk: 'single'
  }
};
