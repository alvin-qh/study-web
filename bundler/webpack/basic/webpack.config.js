const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  devtool: 'cheap-source-map',
  entry: {
    'index': './src/index.js'
  },
  output: {
    filename: 'script/[name].js',
    path: path.resolve(__dirname, 'dist/asset'),
    pathinfo: false
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
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
      }
    ]
  }
};
