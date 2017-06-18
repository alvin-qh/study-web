'use strict';

const gulp = require('gulp');
const ifElse = require('gulp-if-else');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rjs = require('gulp-requirejs-optimize');
const config = require('./config');

gulp.task('js_vendor_bundle', () => {
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/parsleyjs/dist/parsley.js',
        'bower_components/parsleyjs/dist/i18n/zh_cn.js',
        'bower_components/parsleyjs/dist/i18n/zh_cn.extra.js',
        'bower_components/requirejs/require.js',
        'asset/js/config.js'
    ])
        .pipe(concat({path: 'vendor.js', cwd: ''}))
        .pipe(ifElse(config.isPROD, uglify))
        .pipe(gulp.dest('.build/js/vendor'));
});

gulp.task('js_ie8_support_bundle', () => {
    return gulp.src([
        'bower_components/html5shiv/dist/html5shiv.js',
        'bower_components/respond/dest/respond.min.js'
    ])
        .pipe(concat({path: 'ie8-support.js', cwd: ''}))
        .pipe(ifElse(config.isPROD, uglify))
        .pipe(gulp.dest('.build/js/vendor'));
});

gulp.task('js_app_bundle', () => {
    return gulp.src([
        '!asset/js/common/**/*.js',
        '!asset/js/config.js',
        'asset/js/**/*.js'
    ]).pipe(rjs(() => {
        return {
            optimize: 'none',
            useStrict: true,
            baseUrl: 'asset/js',
            paths: {
                'jquery': '../../bower_components/jquery/dist/jquery'
            },
            exclude: [
                'jquery'
            ]
        }
    }))
        .pipe(ifElse(config.isPROD, uglify))
        .pipe(gulp.dest('.build/js'));
});

module.exports = ['js_vendor_bundle', 'js_ie8_support_bundle', 'js_app_bundle'];