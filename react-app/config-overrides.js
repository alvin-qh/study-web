const path = require('path');
const { override, fixBabelImports, addWebpackAlias, addPostcssPlugins, overrideDevServer } = require('customize-cra');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  webpack: override(
    config => {
      if (process.env.NODE_ENV === 'production') {
        config.devtool = false;
        config.plugins.push(
          new CompressionWebpackPlugin({
            test: /\.js$|\.css$/,
            threshold: 1024
          })
        )
      }
      return config;
    },
    addWebpackAlias({
      '@': path.resolve('src')
    }),
    fixBabelImports('import', {
    }),
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
