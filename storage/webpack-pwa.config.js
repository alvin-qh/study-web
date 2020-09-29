const config = require('./webpack.config');
const OfflinePlugin = require('offline-plugin');

const isProd = process.env.NODE_ENV === 'production';

config.plugins = config.plugins.concat([
  new OfflinePlugin({
    responseStrategy: 'cache-first',
    AppCache: true,
    safeToUseOptionalCaches: true,
    autoUpdate: true,
    Caches: {
      main: [
        '**/*.js',
        '**/*.css',
        /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        /\.(woff2?|eot|ttf|otf)(\?.*)?$/
      ],
      additional: [':externals:']
    },
    externals: [],
    excludes: ['**/.*', '**/*.map', '**/*.gz', '**/manifest-last.json'],
    ServiceWorker: {
      output: 'sw.js',
      publicPath: '/sw.js',
      scope: '/',
      minify: isProd,
      events: true
    }
  })
]);

module.exports = config;
