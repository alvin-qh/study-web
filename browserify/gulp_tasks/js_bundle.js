'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const through2 = require('through2');
const ifElse = require('gulp-if-else');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const collapse = require('bundle-collapser/plugin');
const config = require('./config');

// process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;

gulp.task('js_ie8_support_bundle', () => {
    return gulp.src([
        'bower_components/html5shiv/dist/html5shiv.js',
        'bower_components/respond/dest/respond.src.js'
    ])
        .pipe(concat({path: 'ie8-support.js', cwd: ''}))
        .pipe(ifElse(config.isPROD, uglify))
        .pipe(gulp.dest('.build/js/vendor'));
});

gulp.task('js_vendor_bundle', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/parsleyjs/dist/parsley.js',
        'node_modules/parsleyjs/dist/i18n/zh_cn.js',
        'node_modules/parsleyjs/dist/i18n/zh_cn.extra.js'
    ])
        .pipe(concat({path: 'vendor.js', cwd: ''}))
        .pipe(ifElse(config.isPROD, uglify))
        .pipe(gulp.dest('.build/js/vendor'));
});

gulp.task('js_app_bundle', () => {
    return gulp.src([
        '!asset/js/common/**/*.js',
        'asset/js/**/*.js'
    ])
        .pipe(through2.obj((file, enc, next) => {
            let b = browserify(file.path, {fullPaths: false});
            b.ignore('jquery');

            if (config.isPROD) {
                b = b.transform('stripify');
            }
            b.plugin(collapse).bundle((err, res) => {
                file.contents = res;
                next(null, file);
            });
        }))
        .pipe(ifElse(config.isPROD, uglify))
        .pipe(gulp.dest('.build/js'));
});

module.exports = ['js_ie8_support_bundle', 'js_vendor_bundle', 'js_app_bundle'];