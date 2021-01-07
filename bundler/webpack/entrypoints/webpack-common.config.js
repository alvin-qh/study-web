const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// create multiple html entrypoints
function makeHtmlPlugins(entries) {
  // mapping all entites to 'HtmlWebpackPlugin' object
  return Object.keys(entries).map(key => {
    // ignore 'common' chunk
    if (key === 'common') {
      return null;
    }

    // create 'HtmlWebpackPlugin' object
    return new HtmlWebpackPlugin({
      title: `Entrypoint Management - ${key}`,    // <title> element in html
      template: './src/template/index.html',      // location of template file
      filename: `../${key}.html`,   // output filename
      chunks: ['common', key]       // chunks to inject into html file by <script> or <link> elements
    })
  }).filter(entry => entry != null);
}

module.exports = function (entities) {
  return {
    mode: 'development',
    devtool: 'cheap-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true,
      inline: true,
      stats: 'minimal',
      compress: true,
      writeToDisk: true
    },
    entry: entities,
    output: {
      filename: 'script/[name].bundle-[contenthash:8].js',
      chunkFilename: 'script/[name].chunk-[contenthash:8].js',
      path: path.resolve(__dirname, 'dist/asset'),
      pathinfo: false
    },
    plugins: [
      new CleanWebpackPlugin({
        dry: false,
        cleanStaleWebpackAssets: false,
        cleanOnceBeforeBuildPatterns: ['../**/*'],
        dangerouslyAllowCleanPatternsOutsideProject: true
      }),
      new MiniCssExtractPlugin({
        filename: 'style/[name].bundle-[contenthash:8].css'
      }),
      ...makeHtmlPlugins(entities)
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
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
              loader: 'url-loader',
              options: {
                limit: 10240,
                name: 'image/[name]-[contenthash:8].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(eot|woff|woff2|ttf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10240,
                name: 'font/[name]-[contenthash:8].[ext]'
              }
            }
          ]
        }
      ]
    }
  };
}
