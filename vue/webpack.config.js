'use strict';

const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const config = require('./gulp_tasks/config');
const listPath = require('./gulp_tasks/list-path');

const ProvidePlugin = webpack.ProvidePlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


function makeEntries() {
    const src = config.paths.source('js');
    let entries = {};
    let folders = listPath(src);
    folders.map((folder) => {
        let files = glob.sync(path.join(src, folder, '/**/main-*.js'))
            .map((file) => './' + file);
        if (files.length > 0) {
            entries[folder] = files;
        }
    });
    return entries;
}


const plugins = (function () {
    let _plugins = [
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            vue: 'vue'
        }),
        new CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            minChunks: 3
        })
    ];

    if (config.isPROD) {
        _plugins = _plugins.concat([
            new UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false,
                }
            })
        ]);
    }
    return _plugins;
})();

module.exports = () => {
    return {
        entry: makeEntries(),
        externals: {
            jquery: "jQuery",
            vue: 'Vue'
        },
        devtool: 'cheap-source-map',
        output: {
            path: config.paths.dest('js'),
            publicPath: config.paths.dest('js'),
            filename: '[name].js'
        },
        watch: false,
        resolve: {
            alias: {
                jquery: config.paths.modules('jquery/dist/jquery.js'),
                vue: config.paths.modules(config.isPROD ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.js')
            }
        },
        cache: true,
        plugins: plugins,
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /(node_modules|bower_components)/,
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue',
                    exclude: /(node_modules|bower_components)/,
                }
            ]
        },
        vue: {
            loaders: {
                js: 'babel'
            }
        }
    }
};
