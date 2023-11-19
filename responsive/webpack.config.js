const webpack = require('webpack');

const glob = require('glob');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
// const CleanupPlugin = require('webpack-cleanup-plugin');

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

  glob.sync(path.join(src, '/**/main.js'))
    .map(file => `./${file}`)
    .forEach(file => {
      const name = (name => name.substr(name.lastIndexOf('/') + 1))(normalizePath(path.dirname(file)))
      entries[name] = file;
    });
  return entries;
}

function makeTemplates() {
  const wwwRoot = normalizePath(`${CONFIG.paths.www()}/`);

  return glob.sync(path.join(CONFIG.paths.www(), '/**/*.html'))
    .map(file => {
      file = normalizePath(file);

      const chunk = (chunk => chunk.substring(0, chunk.indexOf('/')) || 'home')(file.replace(wwwRoot, ''));
      const chunks = ['manifest', 'vendor', 'common', chunk];

      return new HtmlPlugin({
        filename: file.substring(file.indexOf('/') + 1),
        template: file,
        inject: true,
        chunks: chunks,
        cache: true,
        chunksSortMode(a, b) {
          return chunks.indexOf(a) - chunks.indexOf(b)
        },
        minify: {
          collapseWhitespace: CONFIG.isProd,
          removeComments: CONFIG.isProd
        }
      });
    });
}

const plugins = (() => {
  const ProgressPlugin = webpack.ProgressPlugin;
  const ProvidePlugin = webpack.ProvidePlugin;
  const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

  const plugins = [
    new ProgressPlugin(),
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: CONFIG.isProd ? 'css/[name]-[chunkhash:8].css' : 'css/[name].css'
    }),
    // new CleanupPlugin(),
    new HotModuleReplacementPlugin()
  ].concat(makeTemplates());

  return plugins;
})();

module.exports = {
  mode: CONFIG.isProd ? 'production' : 'development',
  entry: Object.assign({ vendor: ['jquery', 'common'] }, makeEntries()),
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
    extensions: ['.js', '.json']
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
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/env"]
            }
          }
        ]
      }, {
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
      }, {
        test: /\.(eot|woff|woff2|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]-[contenthash:8][ext]"
        }
      }, {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 128 * 1024
          }
        },
        generator: {
          filename: "image/[name]-[contenthash:8][ext]"
        }
      }
    ]
  },
  plugins: plugins,
  devServer: {
    static: {
      directory: path.resolve('out'),
    },
    compress: true,
    port: 9000,
  },
  devtool: 'cheap-source-map',
};
