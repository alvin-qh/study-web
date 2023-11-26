const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  devtool: 'cheap-source-map',
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ['../**/*'],
      dangerouslyAllowCleanPatternsOutsideProject: true  // Allow clean patterns outside of process.cwd()
      // requires dry option to be explicitly set
    })
  ],
  output: {
    pathinfo: false
  },
  optimization: {
    runtimeChunk: 'single'
  }
};
