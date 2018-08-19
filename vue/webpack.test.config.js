const webpack = require("webpack");

const glob = require("glob");
const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions: ['.js', '.jsx', '.json', '.coffee']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }]
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader',
                    options: {importLoaders: 1}
                }],
                fallback: 'style-loader'
            })
        }, {
            test: /\.vue$/,
            exclude: [/node_modules/],
            loader: 'vue-loader'
        }]
    },
    devServer: {
        contentBase: path.resolve('www/')
    },
    devtool: 'cheap-source-map',
};
