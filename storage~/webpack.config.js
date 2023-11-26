const webpack = require('webpack');

const glob = require('glob');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ProvidePlugin = webpack.ProvidePlugin;

const isProd = process.env.NODE_ENV === 'production';

function makeEntries() {
  const entries = {};

  glob.sync(path.resolve(__dirname, 'src/assets/js/**/main.js'))
    .forEach(file => {
      const name = ((name => name.substring(name.lastIndexOf('/') + 1))(path.dirname(file)));
      entries[name] = file;
    });
  return entries;
}

function makeTemplates() {
  const wwwRoot = path.resolve(__dirname, 'src/www/');

  return glob.sync(path.join(wwwRoot, '**/*.html'))
    .map(file => {
      const relateFile = file.replace(`${wwwRoot}/`, '');

      const chunk = relateFile.substring(0, relateFile.indexOf('/')) || 'home';
      const chunks = ['manifest', 'vendor', 'common', chunk];

      console.log(relateFile.substring(relateFile.indexOf('/') + 1));

      return new HtmlPlugin({
        filename: file.substring(relateFile.indexOf('/') + 1),
        template: file,
        inject: true,
        chunks: chunks,
        cache: true,
        chunksSortMode: 'auto',
        minify: {
          collapseWhitespace: isProd,
          removeComments: isProd
        }
      });
    });
}

const plugins = (() => [
  new ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  }),
  new MiniCssExtractPlugin({
    filename: isProd ? 'css/[name]-[chunkhash:8].css' : 'css/[name].css'
  }),
  new CopyPlugin({
    patterns: [
      {
        context: path.resolve(__dirname, 'src/www'),
        from: '**/*.appcache',
        to: 'www'
      }
    ]
  })
].concat(makeTemplates()));

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: Object.assign({ vendor: ['jquery', 'bootstrap', 'common'] }, makeEntries()),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? 'static/js/[name]-[chunkhash:8].js' : 'static/js/[name].js',
    publicPath: '/',
    chunkFilename: isProd ? 'static/js/[name]-[chunkhash:8].js' : 'static/js/[name].js',
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/assets/js/common/common.js'),
      '@': path.resolve(__dirname, 'src/assets')
    },
    extensions: ['.js']
  },
  optimization: {
    minimize: isProd,
    removeEmptyChunks: true,
    runtimeChunk: {
      name: 'manifest',
    }
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          }
        ]
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
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]-[contenthash:8][ext]'
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 128 * 1024
          }
        },
        generator: {
          filename: 'image/[name]-[contenthash:8][ext]'
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    hot: true
  },
  devtool: 'cheap-source-map',
};
