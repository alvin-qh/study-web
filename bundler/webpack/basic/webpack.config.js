const path = require('path');

module.exports = {
  entry: {
    'index': './src/index.js'
  },
  output: {
    filename: 'script/[name].js',
    path: path.resolve(__dirname, 'dist/asset')
  }
};
