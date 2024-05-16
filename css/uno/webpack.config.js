const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { glob } = require('glob');

const isProduction = process.env.NODE_ENV === 'production';

const entries = (() => {
  const entries = {
    index: ['./src/index.ts']
  };

  const baseDir = path.join(__dirname, 'src');

  for (const file of glob.sync(path.join(baseDir, '**/index.ts'))) {
    let key = path.dirname(path.relative(baseDir, file));
    if (key === '.') {
      key = 'index';
    }
    entries[key] = [`./${path.relative(__dirname, file)}`];
  }
  return entries;
})();

function makeHtmlTemplates() {
  return Object.entries(entries).map(([key, val]) => {
    return new HtmlWebpackPlugin({
      filename: `${key}.html`,
      template: 'index.html',
      inject: true,
      chunks: [key],
      cache: true,
      title: key.replace(/^\S/, s => s.toUpperCase()),
      chunksSortMode: 'auto',
      minify: {
        collapseWhitespace: isProduction,
        removeComments: isProduction
      }
    });
  });
}

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: entries,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProduction ? 'js/[name].[chunkhash:8].js' : 'js/[name].js',
    publicPath: '/'
  },
  devServer: {
    open: true,
    host: 'localhost',
    liveReload: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    ...makeHtmlTemplates(),
    new MiniCssExtractPlugin({
      filename: isProduction ? 'css/[name].[chunkhash:8].css' : 'css/[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.styl$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf|png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'asset/[name][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 15
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    minimize: isProduction,
    usedExports: true,
    providedExports: true,
    sideEffects: true,
    removeEmptyChunks: true,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 3,
          reuseExistingChunk: true
        }
      }
    }
  }
};
