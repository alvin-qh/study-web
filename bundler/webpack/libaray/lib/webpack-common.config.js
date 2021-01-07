const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  plugins: [
    new CleanWebpackPlugin()
  ]
};
