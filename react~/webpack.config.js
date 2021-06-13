const webpack = require('webpack');

const glob = require('glob');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CleanupPlugin = require('webpack-cleanup-plugin');

function normalizePath(p) {
  return p.replace(/\\/g, '/');
}

const CONFIG = {
  isProd: (process.env.NODE_ENV === 'production'),
  paths: {
    src: file => normalizePath(path.join('src/assets', file || '')),
    dst: file => normalizePath(path.join('out', file || '')),
    www: file => normalizePath(path.join('src/www', file || ''))
  }
};

function makeEntries() {
  const src = `./${CONFIG.paths.src('js')}/`;
  const entries = {};

  glob.sync(path.join(src, '/**/main.js?(x)'))
    .map(file => `./${file}`)
    .forEach(file => {
      file = normalizePath(file);

      let name = path.dirname(file);
      name = name.substr(name.lastIndexOf('/') + 1);
      entries[name] = file;
    });
  return entries;
}

function makeTemplates() {
  const wwwRoot = normalizePath(`${CONFIG.paths.www()}/`);

  return glob.sync(path.join(CONFIG.paths.www(), '/**/*.html'))
    .map(file => {
      file = normalizePath(file);

      let chunks = file.replace(wwwRoot, '');
      chunks = chunks.substr(0, chunks.indexOf('/')) || 'home';
      chunks = ['manifest', 'vendor', 'common', chunks];

      return new HtmlPlugin(
        {
          filename: file.substr(file.indexOf('/') + 1),
          template: file,
          inject: true,
          chunks: chunks,
          cache: true,
          chunksSortMode(a, b) {
            return chunks.indexOf(a) - chunks.indexOf(b);
          },
          minify: {
            collapseWhitespace: CONFIG.isProd,
            removeComments: CONFIG.isProd
          }
        }
      );
    });
}

const plugins = (() => {
  const ProvidePlugin = webpack.ProvidePlugin;
  const ProgressPlugin = webpack.ProgressPlugin;
  const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

  const plugins = [
    new ProgressPlugin(),
    new ProvidePlugin({
      // $: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: CONFIG.isProd ? 'css/[name]-[chunkhash:8].css' : 'css/[name].css'
    }),
    new CleanupPlugin(),
    new HotModuleReplacementPlugin()
  ].concat(makeTemplates());

  return plugins;
})();

module.exports = {
  mode: CONFIG.isProd ? 'production' : 'development',
  entry: Object.assign({ vendor: ['react', 'react-dom', 'axios', 'moment', 'lodash', 'common'] }, makeEntries()),
  output: {
    path: path.resolve(CONFIG.paths.dst()),
    filename: CONFIG.isProd ? 'static/js/[name]-[chunkhash:8].js' : 'static/js/[name].js',
    publicPath: "/",
    chunkFilename: CONFIG.isProd ? 'static/js/[name]-[chunkhash:8].js' : 'static/js/[name].js',
  },
  resolve: {
    alias: {
      common: `./${CONFIG.paths.src('js')}/common/common.js`
    },
    extensions: ['.js', '.jsx', '.json']
  },
  optimization: {
    minimize: CONFIG.isProd,
    removeEmptyChunks: true,
    runtimeChunk: {
      name: 'manifest',
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
            plugins: [
              ['transform-class-properties']
            ]
          }
        }]
      },
      {
        test: /\.(less|css)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 10240,
            name: CONFIG.isProd ? 'static/fonts/[name]-[hash:8].[ext]' : 'static/fonts/[name].[ext]',
            publicPath: '/'
          }
        }]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 10240,
            name: CONFIG.isProd ? 'static/images/[name]-[hash:8].[ext]' : 'static/images/[name].[ext]',
            publicPath: '/'
          }
        }]
      }
    ]
  },
  plugins: plugins,
  devServer: {
    contentBase: path.resolve('out/'),
    inline: true,
    hot: true
  },
  devtool: 'cheap-source-map',
};
