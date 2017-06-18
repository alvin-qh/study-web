'use strict';

const webpack = require("webpack");
const glob = require("glob");
const path = require("path");
const fs = require("fs");
const cp = require('child_process');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webConfig = {
	isProd: (process.env.NODE_ENV === 'production'),
	paths: {
		source: file => path.join('asset', file || ''),
		dest: file => path.join('www/asset', file || '')
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

const plugins = (() => {
	const ProvidePlugin = webpack.ProvidePlugin;
	const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

	const plugins = [
		new ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		new CommonsChunkPlugin({
			name: ['vendor', 'manifest']
		}),
		new ExtractTextPlugin({
			filename: '[name].css',
			disable: false,
			allChunks: true,
		})
	];

	return plugins;
})();

module.exports = {
	entry: Object.assign({
		vendor: ['jquery', 'bootstrap', 'vue', 'moment', 'lodash']
	}, makeEntries()),
	output: {
		path: path.resolve(webConfig.paths.dest()),
		filename: '[name].js',
		publicPath: 'www',
		chunkFilename: "[name].js",
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
				use: ['css-loader', {
					loader: 'less-loader',
					options: {importLoaders: 1}
				}],
				fallback: 'style-loader'
			})
		}, {
			test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
			use: [
				{
					loader: 'url-loader',
					options: {
						limit: 30000,
						name: "[name].[ext]"
					}
				}
			]
		}]
	},
	plugins: plugins,
	devServer: {
		contentBase: path.resolve('www')
	},
	watch: !webConfig.isProd
};

//
// const ProvidePlugin = webpack.ProvidePlugin;
// const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
//
// const plugins = (() => {
// 	let _plugins = [
// 		new ProvidePlugin({
// 			$: "jquery",
// 			jQuery: "jquery",
// 			vue: 'vue'
// 		}),
// 		new CommonsChunkPlugin({
// 			name: 'common',
// 			filename: 'common.js',
// 			minChunks: 3
// 		})
// 	];
//
// 	if (webConfig.isProd) {
// 		_plugins = _plugins.concat([
// 			new UglifyJsPlugin({
// 				compress: {
// 					warnings: false
// 				},
// 				output: {
// 					comments: false,
// 				}
// 			})
// 		]);
// 	}
// 	return _plugins;
// })();
//
// console.log(webConfig.paths.dest('js'));
//
// module.exports = () => {
// 	return {
// 		entry: makeEntries(),
// 		externals: {
// 			jquery: "jQuery",
// 			vue: 'Vue'
// 		},
// 		devtool: 'cheap-source-map',
// 		output: {
// 			path: webConfig.paths.dest('js'),
// 			publicPath: webConfig.paths.dest('js'),
// 			filename: '[name].js'
// 		},
// 		watch: false,
// 		resolve: {
// 			alias: {
// 				jquery: webConfig.paths.modules('jquery/dist/jquery.js'),
// 				vue: webConfig.paths.modules(webConfig.isProd ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.js')
// 			}
// 		},
// 		cache: true
// 	}
// };
