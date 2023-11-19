const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  devtool: 'cheap-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: '/',
      serverSideRender: true,
      writeToDisk: true,
    },
    hot: true,
    compress: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ['../**/*'],
      dangerouslyAllowCleanPatternsOutsideProject: true  // Allow clean patterns outside of process.cwd()
    }),
    new HtmlWebpackPlugin({
      title: 'Asset Module',
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
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single'
  }
};
