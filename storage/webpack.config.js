const webpack = require('webpack');

const glob = require('glob');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CleanupPlugin = require('webpack-cleanup-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
            file = normalizePath(file);

            let name = path.dirname(file);
            name = name.substr(name.lastIndexOf('/') + 1);
            entries[name] = file;
        });
    return entries;
}

function makeTemplates() {
    const wwwRoot = normalizePath(CONFIG.paths.www() + '/');

    return glob.sync(path.join(CONFIG.paths.www(), '/**/*.html'))
        .map(file => {
            file = normalizePath(file);

            let chunk = file.replace(wwwRoot, '');
            chunk = chunk.substr(0, chunk.indexOf('/')) || 'home';

            const chunks = ['manifest', 'vendor', 'common', chunk];

            return new HtmlPlugin({
                filename: file.substr(file.indexOf('/') + 1),
                template: file,
                inject: true,
                chunks: chunks,
                cache: true,
                chunksSortMode(a, b) {
                    return chunks.indexOf(a.names[0]) - chunks.indexOf(b.names[0]);
                },
                minify: {
                    collapseWhitespace: CONFIG.isProd,
                    removeComments: CONFIG.isProd
                }
            });
        });
}

const extractCss = new ExtractTextPlugin({
    filename: CONFIG.isProd ? 'static/css/[name]-[chunkhash:8].css' : 'static/css/[name].css',
    disable: false,
    allChunks: true,
});

const plugins = (() => {
    const ProvidePlugin = webpack.ProvidePlugin;
    const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

    let plugins = [
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        extractCss,
        new CleanupPlugin(),
        new CopyPlugin([
            {context: CONFIG.paths.www(), from: '**/*.appcache', to: 'www'}
        ], {copyUnmodified: true})
    ].concat(makeTemplates());

    if (CONFIG.isProd) {
        plugins = plugins.concat([
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {discardComments: {removeAll: true}},
                canPrint: true
            })
        ]);
    } else {
        plugins = plugins.concat([
            new HotModuleReplacementPlugin()
        ]);
    }

    return plugins;
})();

module.exports = {
    mode: CONFIG.isProd ? 'production' : 'development',
    entry: Object.assign({vendor: ['jquery', 'bootstrap', 'promise', 'common']}, makeEntries()),
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
        extensions: ['.js', '.vue', '.json']
    },
    optimization: {
        minimize: CONFIG.isProd,
        removeEmptyChunks: true,
        splitChunks: {
            chunks: 'all',
            name: 'vendor'
        },
        runtimeChunk: {
            name: 'manifest',
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/env"]
                }
            }]
        }, {
            test: /\.css/,
            use: extractCss.extract({
                use: [{
                    loader: 'css-loader'
                }],
                fallback: 'style-loader'
            })
        }, {
            test: /\.less$/,
            use: extractCss.extract({
                use: [{
                    loader: 'css-loader',
                }, {
                    loader: 'less-loader',
                    options: {importLoaders: 1}
                }],
                fallback: 'style-loader'
            })
        }, {
            test: /\.(eot|woff|woff2|ttf)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 10240,
                    name: CONFIG.isProd ? 'static/fonts/[name]-[hash:8].[ext]' : 'static/fonts/[name].[ext]',
                    publicPath: '/'
                }
            }]
        }, {
            test: /\.(svg|png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 10240,
                    name: CONFIG.isProd ? 'static/images/[name]-[hash:8].[ext]' : 'static/images/[name].[ext]',
                    publicPath: '/'
                }
            }]
        }, {
            test: /\.vue$/,
            exclude: [/node_modules/],
            loader: 'vue-loader'
        }]
    },
    plugins: plugins,
    devServer: {
        contentBase: path.resolve('out/'),
        inline: true,
        hot: true
    },
    devtool: 'cheap-source-map',
};