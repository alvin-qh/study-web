const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'test_index': './test/test_index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'test/dist')
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
