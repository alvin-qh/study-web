'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const ifElse = require('gulp-if-else');
const cleanCss = require('gulp-clean-css');
const config = require('./config');

gulp.task('css_vendor_bundle', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.css',
        'node_modules/parsleyjs/src/parsley.css'
    ])
        .pipe(concat('vendor.css'))
        .pipe(ifElse(config.isPROD, cleanCss))
        .pipe(gulp.dest('.build/css/vendor'));
});

gulp.task('css_common_bundle', () => {
    return gulp.src([
        'asset/css/common/**/*.css'
    ])
        .pipe(concat('common.css'))
        .pipe(ifElse(config.isPROD, cleanCss))
        .pipe(gulp.dest('.build/css/common'));
});

gulp.task('css_app', () => {
    return gulp.src([
        '!asset/css/common/**/*.css',
        'asset/css/**/*.css'
    ])
        .pipe(ifElse(config.isPROD, cleanCss))
        .pipe(gulp.dest('.build/css'));
});

module.exports = ['css_vendor_bundle', 'css_common_bundle', 'css_app'];