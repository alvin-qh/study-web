const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: {
    'index': './src/script/index.js'
  },
  output: {
    filename: 'script/[name].js',
    chunkFilename: 'script/[name].js',
    path: path.resolve(__dirname, 'dist/asset'),
    pathinfo: false
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
