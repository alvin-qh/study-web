const path = require('path');
const { override, fixBabelImports, addWebpackAlias, addPostcssPlugins, overrideDevServer } = require('customize-cra');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  webpack: override(
    config => {
      config.devtool = false;

      if (process.env.COMPRESS_USE_GZIP === 'true') {
        config.plugins.push(
          new CompressionWebpackPlugin({
            test: /\.(js|css)$/,
            threshold: 1024
          })
        )
      }
      return config;
    },
    addWebpackAlias({
      '@': path.join(__dirname, '.', 'src'),
      '@pages': path.join(__dirname, '.', 'src/pages'),
      '@components': path.join(__dirname, '.', 'src/components')
    }),
    fixBabelImports('import', []),
    addPostcssPlugins([
      require('postcss-pxtorem')({
        rootValue: 75,
        propList: ['*'],
        minPixelValue: 2,
        selectorBlackList: ['am-']
      })
    ])
  ),
  devServer: overrideDevServer(
    config => {
      return {
        ...config
      }
    }
  )
};
