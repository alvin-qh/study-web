const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');


module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ['../**/*'],
      dangerouslyAllowCleanPatternsOutsideProject: true  // Allow clean patterns outside of process.cwd()
                                                         // requires dry option to be explicitly set
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/template/index.html',
      filename: '../[name].html',
      chunks: 'all'
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].bundle-[contenthash:8].css'
    }),

    /**
     * Create manifest.json file, include mapping info of file key and file path
     * 
     * Manifest File Descriptor Object schema
     * {
     *    chunk?: Chunk;            // A Chunk object, only available if isChunk is true
     *    isAsset: boolean;
     *    isChunk: boolean;         
     *    isInitial: boolean;       // Is required to run you app. Cannot be true if isChunk is false.
     *    isModuleAsset: boolean;   // Is required by a module. Cannot be true if isAsset is false.
     *    name: string | null;
     *    path: string;
     * }
     */
    new WebpackManifestPlugin({
      /**
       * Type: String
       * Default: ''
       * 
       * Specifies a path prefix for all keys in the manifest. 
       * Useful for including your output path in the manifest.
       */
      basePath: '',

      /**
       * Type: String
       * Default: <webpack-config>.output.publicPath
       * 
       * A path prefix that will be added to values of the manifest.
       */
      // publicPath: '',

      /**
       * Type: String
       * Default: manifest.json
       *
       * Specifies the file name to use for the resulting manifest.
       * By default the plugin will emit manifest.json to your output directory.
       * Passing an absolute path to the fileName option will override both the file name and path.
       */
      fileName: 'manifest.json',

      /**
       * Type: RegExp | Boolean
       * Default: /([a-f0-9]{32}\.?)/gi
       * 
       * If set to a valid RegExp, removes hashes from manifest keys.
       * The default value for this option is a regular expression targeting Webpack's default md5 hash. 
       * To target other hashing functions / algorithms, set this option to an appropriate RegExp. 
       * To disable replacing the hashes in key names, set this option to false.
       */
      removeKeyHash: /([a-f0-9]{32}\.?)/gi,

      /**
       * Type: Object
       * Default: {}
       * 
       * A cache of key/value pairs to used to seed the manifest. 
       * This may include a set of custom key/value pairs to include in your manifest, 
       * or may be used to combine manifests across compilations in multi-compiler mode. 
       * To combine manifests, pass a shared seed object to each compiler's 
       * WebpackManifestPlugin instance.
       */
      seed: {},

      /**
       * Type: Boolean
       * Default: false
       * 
       * If true, the keys specified in the entry property will be used as keys in the manifest. 
       * No file extension will be added (unless specified as part of an entry property key).
       */
      useEntryKeys: false,

      /**
       * Type: Boolean
       * Default: false
       * 
       * If true, will emit the manifest to the build directory and in memory for 
       * compatibility with webpack-dev-server.
       */
      writeToFileEmit: false,

      /**
       * Type: Function
       * Default: undefined

       * @param {Object} manifest 
       * @returns {String}
       * 
       * A Function which can be leveraged to serialize the manifest in a different format than json. e.g. yaml.
       */
      serialize(manifest) {
        return JSON.stringify(manifest);
      },

      /**
       * Type: Function
       * Default: undefined
       * 
       * @param {FileDescriptor} fileA
       * @param {FileDescriptor} fileB
       * 
       * Allows sorting the files which make up the manifest. 
       * Return 0 to indicate no change, -1 to indicate the file should be moved to a lower index, 
       * and 1 to indicate the file shoud be moved to a higher index.
       */
      sort() {
        return 0;
      },

      /**
       * Type: Function
       * Default: undefined
       * 
       * @param {FileDescriptor} file
       * @returns {Boolean}
       * 
       * Allows filtering the files which make up the manifest. 
       * false to remove the file.
       */
      // filter() {
      //   return true;
      // },

      /**
       * Type: Function
       * Default: undefined
       * 
       * @param {FileDescriptor} file
       * @returns {FileDescriptor}
       * 
       * Allows modifying the files which make up the manifest. 
       */
      map(file) {
        return file;
      },

      /**
       * Type: Function
       * Default: undefined
       * 
       * @param {Object} seed
       * @param {FileDescriptor[]} files
       * @param {string[]} entries
       * @returns {Object}
       * 
       * A custom Function to create the manifest.
       * Can return anything as long as it's serialisable by JSON.stringify.
       */
      // generate(seed, files, entries) {
      // }
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist/asset'),
    filename: 'script/[name].bundle-[contenthash:8].js',
    chunkFilename: 'script/[name].bundle-[contenthash:8].js',
    pathinfo: false
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false
          }
        }
      },
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
  },
  optimization: {
    runtimeChunk: 'single'
  }
};
