'use strict';

const webpack = require('webpack');
const config = require('./gulp_tasks/config');

const ProvidePlugin = webpack.ProvidePlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

let plugins = [
    new ProvidePlugin({
        jQuery: "jquery",
        $: "jquery"
    }),
    new CommonsChunkPlugin({
        name: 'common',
        filename: 'common/common.js',
        // chunks: ['home/home'],
        minChunks: 2
    })
];

if (config.isPROD) {
    plugins = plugins.concat([
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

module.exports = {
    entry: {
        'home/home': ['./asset/js/home/home.js']
    },
    externals: {
        jquery: "jQuery"
    },
    output: {
        publicPath: './.build/js',
        path: './.build/js',
        filename: '[name].js'
    },
    resolve: {
        alias: {
            jquery: 'node_modules/jquery/dist/jquery.js'
        }
    },
    plugins: plugins
};
