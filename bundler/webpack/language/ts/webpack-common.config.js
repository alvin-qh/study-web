import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import url from 'url';

const devMode = process.env.NODE_ENV !== 'production';

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  mode: devMode ? 'development' : 'production',
  devtool: 'cheap-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: '/',
      serverSideRender: true,
      writeToDisk: true
    },
    hot: true,
    compress: true
  },
  output: {
    filename: 'js/[name].bundle.[contenthash:8].js',
    chunkFilename: 'js/[name].chunk.[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    pathinfo: false
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      cleanStaleWebpackAssets: false,
      dangerouslyAllowCleanPatternsOutsideProject: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Language-TS',
      template: './index.html',
      filename: '[name].html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
};
