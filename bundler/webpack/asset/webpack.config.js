const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'index': './src/script/index.js'
  },
  output: {
    filename: 'script/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // "publicPath" for css file
              // "file-loader" copy all files into output folder 'dist', and change url relative to 'dist'
              //      "dist/image/webpack.png" => url("image/webpack.png")
              // "publicPath: '..'" means add '..' to all file url in css
              //      "dist/image/webpack.png" => url("../image/webpack.png")
              publicPath: '..'
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'image/[name].[ext]',
              useRelativePath: true
            }
          }
        ]
      }
    ]
  }
};
