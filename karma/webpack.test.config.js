const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanupPlugin = require("webpack-cleanup-plugin");

const extractCss = new ExtractTextPlugin({
    filename: 'static/css/[name].css',
    disable: false,
    allChunks: true,
});

module.exports = {
    mode: 'development',

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }]
        }, {
            test: /\.css/,
            use: extractCss.extract({
                use: [{
                    loader: 'css-loader',
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
            test: /\.vue$/,
            exclude: [/node_modules/],
            loader: 'vue-loader'
        }, {
            test: /\.(eot|woff|woff2|ttf)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 10240,
                    name: 'static/fonts/[name].[ext]',
                    publicPath: '/'
                }
            }]
        }, {
            test: /\.(svg|png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 10240,
                    name: 'static/images/[name].[ext]',
                    publicPath: '/'
                }
            }]
        }]
    },
    plugins: [
        extractCss, new CleanupPlugin()
    ],
    devServer: {
        contentBase: path.resolve('www/')
    },
    devtool: 'cheap-source-map',
};
