import webpack from "webpack"

import glob from "glob"
import path from "path"

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlPlugin from "html-webpack-plugin"
import VueLoaderPlugin from "vue-loader/lib/plugin"
// import CleanupPlugin from "webpack-cleanup-plugin"

function normalizePath(p) {
  return p.replace(/\\/g, '/')
}

const CONFIG = {
  isProd: (process.env.NODE_ENV === 'production'),
  paths: {
    src: file => normalizePath(path.join('src/assets', file || '')),
    dst: file => normalizePath(path.join('out', file || '')),
    www: file => normalizePath(path.join('src/www', file || ''))
  }
}

function makeEntries() {
  const src = `./${CONFIG.paths.src('js')}/`
  const entries = {}

  glob.sync(path.join(src, '/**/main.{j,t}s'))
    .map(file => `./${file}`)
    .forEach(file => {
      const name = (name => name.substr(name.lastIndexOf('/') + 1))(normalizePath(path.dirname(file)))
      entries[name] = file
    })
  return entries
}

function makeTemplates() {
  const wwwRoot = normalizePath(`${CONFIG.paths.www()}/`)

  return glob.sync(path.join(CONFIG.paths.www(), '/**/*.html'))
    .map(file => {
      file = normalizePath(file)

      const chunk = (chunk => chunk.substr(0, chunk.indexOf('/')) || 'home')(file.replace(wwwRoot, ''))
      const chunks = ['manifest', 'vendor', 'common', chunk]

      return new HtmlPlugin({
        filename: file.substr(file.indexOf('/') + 1),
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
      })
    })
}

const plugins = (() => {
  const ProgressPlugin = webpack.ProgressPlugin
  const ProvidePlugin = webpack.ProvidePlugin
  const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin

  const plugins = [
    new ProgressPlugin(),
    new VueLoaderPlugin(),
    new ProvidePlugin({
      // $: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: CONFIG.isProd ? 'css/[name]-[chunkhash:8].css' : 'css/[name].css'
    }),
    new HotModuleReplacementPlugin()
  ].concat(makeTemplates())

  return plugins
})();

export default {
  mode: CONFIG.isProd ? 'production' : 'development',
  entry: Object.assign({ vendor: ['vue', 'bootstrap-vue', 'axios', 'moment', 'lodash', 'common'] }, makeEntries()),
  output: {
    path: path.resolve(CONFIG.paths.dst()),
    filename: CONFIG.isProd ? 'static/js/[name]-[chunkhash:8].js' : 'static/js/[name].js',
    publicPath: "/",
    chunkFilename: CONFIG.isProd ? 'static/js/[name]-[chunkhash:8].js' : 'static/js/[name].js',
  },
  resolve: {
    alias: {
      common: `./${CONFIG.paths.src('js')}/common/common.js`,
      vue: CONFIG.isProd ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
    },
    extensions: ['.js', '.ts', '.vue', '.json']
  },
  optimization: {
    minimize: CONFIG.isProd,
    removeEmptyChunks: true,
    runtimeChunk: {
      name: 'manifest'
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
              presets: ['@babel/env']
            }
          }
        ]
      }, {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
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
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10240,
              name: CONFIG.isProd ? 'static/fonts/[name]-[hash:8].[ext]' : 'static/fonts/[name].[ext]',
              publicPath: '/'
            }
          }
        ]
      }, {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10240,
              name: CONFIG.isProd ? 'static/images/[name]-[hash:8].[ext]' : 'static/images/[name].[ext]',
              publicPath: '/'
            }
          }
        ]
      }, {
        test: /\.vue$/,
        exclude: [/node_modules/],
        loader: 'vue-loader'
      }
    ]
  },
  plugins: plugins,
  devServer: {
    hot: true
  },
  devtool: 'cheap-source-map'
}
