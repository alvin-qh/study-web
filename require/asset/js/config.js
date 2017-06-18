;
(function (global) {
    'use strict';

    if (global.require && typeof global.require.config === 'function') {
        global.require.config({
            baseUrl: 'asset/js',
            paths: {
                'common': 'common',
                'vendor': 'vendor'
            }
        });
    }

    // 令全局量可以被AMD引入
    define('jquery', function () {
        return global.jQuery;
    });

})(this);

