'use strict';

import webpack from "webpack";

import glob from "glob";
import path from "path";

import ExtractTextPlugin from "extract-text-webpack-plugin";
import AccessPlugin from "assets-webpack-plugin";
import HtmlPlugin from "html-webpack-plugin";
import CleanupPlugin from "webpack-cleanup-plugin";

const webConfig = {
    isProd: (process.env.NODE_ENV === 'production'),
    paths: {
        source: file => path.join('src/assets', file || ''),
        template: file => path.join('src/www', file || ''),
        dest: file => path.join('out', file || '')
    }
};

function makeEntries() {
    const src = `./${webConfig.paths.source('js')}/`;
    const entries = {};

    glob.sync(path.join(src, '/**/main.js?(x)')).map(file => `./${file}`)
        .forEach(file => {
            let name = path.dirname(file);
            name = name.substr(name.lastIndexOf('/') + 1);
            entries[name] = file;
        });
    return entries;
}

function makeTemplates() {
    return glob.sync(path.join(webConfig.paths.template(), '/**/*.html'))
        .map(file => {
            let chunks = file.replace(webConfig.paths.template() + '/', '');
            chunks = chunks.substr(0, chunks.indexOf('/')) || 'home';
            chunks = ['manifest', 'vendor', 'common', chunks];

            return new HtmlPlugin({
                filename: file.substr(file.indexOf('/') + 1),
                template: file,
                inject: false,
                chunks: chunks,
                cache: true,
                chunksSortMode(a, b) {
                    return chunks.indexOf(a.names[0]) - chunks.indexOf(b.names[0]);
                },
                minify: {
                    collapseWhitespace: webConfig.isProd,
                    removeComments: webConfig.isProd
                }
            });
        });
}

const plugins = (() => {
    const ProvidePlugin = webpack.ProvidePlugin;
    const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
    const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

    return [
        new ProvidePlugin({}),
        new CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        new ExtractTextPlugin({
            filename: webConfig.isProd ? 'assets/css/[name]-[chunkhash:8].css' : 'assets/css/[name].css',
            disable: false,
            allChunks: true,
        }),
        new CleanupPlugin()
    ]
        .concat(makeTemplates())
        .concat(webConfig.isProd ? [
            new AccessPlugin({
                filename: webConfig.paths.dest('assets/manifest.json')
            }),
            new UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false,
                }
            })
        ] : [
            new HotModuleReplacementPlugin()
        ]);
})();

module.exports = {
    entry: Object.assign({
        vendor: ['react', 'react-dom']
    }, makeEntries()),
    output: {
        path: path.resolve(webConfig.paths.dest()),
        filename: webConfig.isProd ? 'assets/js/[name]-[chunkhash:8].js' : 'assets/js/[name].js',
        publicPath: "/",
        chunkFilename: webConfig.isProd ? 'assets/js/[name]-[chunkhash:8].js' : 'assets/js/[name].js',
    },
    resolve: {
        alias: {},
        extensions: ['.js', '.jsx', '.json', '.coffee']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-3', 'react']
                }
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: "css-loader",
                options: {
                    minimize: webConfig.isProd
                }
            }]
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: webConfig.isProd
                    }
                }, {
                    loader: 'less-loader',
                    options: {importLoaders: 1}
                }],
                fallback: 'style-loader'
            })
        }, {
            test: /\.(eot|woff|woff2|ttf)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 30000,
                    name: webConfig.isProd ? 'assets/css/fonts/[name]-[hash:8].[ext]' : 'assets/css/fonts/[name].[ext]'
                }
            }]
        }, {
            test: /\.(svg|png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 30000,
                    name: webConfig.isProd ? 'assets/css/images/[name]-[hash:8].[ext]' : 'assets/css/images/[name].[ext]'
                }
            }]
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