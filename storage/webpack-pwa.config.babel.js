import baseConfig, {CONFIG} from "./webpack.config.babel";
import OfflinePlugin from "offline-plugin";

baseConfig.plugins = baseConfig.plugins.concat([
    new OfflinePlugin({
        responseStrategy: 'cache-first',
        AppCache: true,
        safeToUseOptionalCaches: true,
        autoUpdate: true,
        Caches: {
            main: [
                '**/*.js',
                '**/*.css',
                /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                /\.(woff2?|eot|ttf|otf)(\?.*)?$/
            ],
            additional: [':externals:']
        },
        externals: [],
        excludes: ['**/.*', '**/*.map', '**/*.gz', '**/manifest-last.json'],
        ServiceWorker: {
            output: 'sw.js',
            publicPath: '/sw.js',
            scope: '/',
            minify: CONFIG.isProd,
            events: true
        }
    })
]);

export default baseConfig;