const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: {
    'test_index': './test/test_index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'test/dist'),
    pathinfo: false
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
