// Karma configuration
// Generated on Tue Jul 11 2017 15:33:17 GMT+0800 (CST)

import webpackConfig from "./webpack.test.config.babel";

export default function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],

        plugins: [
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-mocha',
            'karma-chai',
            'karma-sourcemap-loader',
            'karma-sinon-chai',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-coverage'
        ],

        webpack: webpackConfig,

        // list of files / patterns to load in the browser
        files: [
            'test/**/*.test.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/**/*.test.js': ['webpack']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['junit', 'progress', 'coverage'],

        coverageReporter: {
            dir: './coverage',
            reporters: [
                {type: 'html', subdir: 'report-html'},
                {type: 'lcov', subdir: '.'},
                {type: 'text-summary'}
            ]
        },

        junitReporter: {
            outputFile: './reports/test-results.xml',
            suite: 'unit'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
        phantomjsLauncher: {
            exitOnResourceError: true
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        client: {
            "captureConsole": true
        }
    })
};
