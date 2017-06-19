'use strict';

const webpack = require("webpack");
const glob = require("glob");
const path = require("path");
const fs = require("fs");
const cp = require('child_process');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AccessPlugin = require('assets-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const webConfig = {
    isProd: (process.env.NODE_ENV === 'production'),
    paths: {
        source: file => path.join('asset', file || ''),
        template: file => path.join('template', file || ''),
        dest: file => path.join('www', file || '')
    },
    cleanOptions: {
        force: true
    }
};

cp.execSync(`rm -rf ${webConfig.paths.dest()}`);

function makeEntries() {
    const src = './' + webConfig.paths.source('js') + '/';
    let entries = {};
    glob.sync(path.join(src, '/**/main-*.js')).map((file) => './' + file)
        .forEach(file => {
            let name = file.replace(src, '').replace('main-', '');
            name = name.replace(path.extname(name), '');
            entries[name] = file;
        });
    return entries;
}

function makeTemplates() {
    return glob.sync(path.join(webConfig.paths.template(), '/**/*.html'))
        .map(file => {
            return new HtmlPlugin({
                filename: path.basename(file),
                template: file,
                inject: false,
                cache: true,
                minify: {
                    collapseWhitespace: true,
                    removeComments: true
                }
            });
        });
}

const plugins = (() => {
    const ProvidePlugin = webpack.ProvidePlugin;
    const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
    const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

    return [
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        new ExtractTextPlugin({
            filename: 'asset/css/[name]-[hash:8].css',
            disable: false,
            allChunks: true,
        }),
        new AccessPlugin({
            filename: webConfig.paths.dest('asset/manifest.json')
        })
    ]
        .concat(makeTemplates())
        .concat(webConfig.isProd ? [
            new UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false,
                }
            })
        ] : []);
})();

module.exports = {
    entry: Object.assign({
        vendor: ['jquery', 'bootstrap', 'vue', 'moment', 'lodash']
    }, makeEntries()),
    output: {
        path: path.resolve(webConfig.paths.dest()),
        filename: 'asset/js/[name]-[hash:8].js',
        chunkFilename: "asset/js/[name]-[hash:8].js",
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                },
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
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 30000,
                    name: "asset/static/[name]-[hash:8].[ext]"
                }
            }]
        }]
    },
    plugins: plugins,
    devServer: {
        contentBase: path.resolve('www/')
    },
    devtool: 'cheap-source-map',
};