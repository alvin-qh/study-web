import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import VueLoaderPlugin from "vue-loader/lib/plugin";

export default {
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
                    presets: ['env']
                }
            }]
        }, {
            test: /\.css/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                }],
                fallback: 'style-loader'
            })
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
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
        new VueLoaderPlugin(),
        new ExtractTextPlugin({
            filename: 'static/css/[name].css',
            disable: false,
            allChunks: true,
        })
    ],
    devServer: {
        contentBase: path.resolve('www/')
    },
    devtool: 'cheap-source-map',
};
