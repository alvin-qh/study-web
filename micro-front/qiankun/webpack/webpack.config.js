import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const devMode = process.env.NODE_ENV !== 'production';

// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: devMode ? 'development' : 'production',
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: '[name].bundle.[contenthash:8].js',
    chunkFilename: '[name].chunk.[contenthash:8].js',
    path: path.join(__dirname, 'dist'),
    pathinfo: false
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.css', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      cleanStaleWebpackAssets: false,
      dangerouslyAllowCleanPatternsOutsideProject: true
    }),
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Qiankun-Webpack',
      template: './index.html',
      filename: '../[name].html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css$/i,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
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
          filename: 'image/[name].[contenthash:8][ext]'
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[contenthash:8][ext]'
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    }
  }
};
