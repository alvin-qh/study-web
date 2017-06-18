'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const ifElse = require('gulp-if-else');
const cleanCss = require('gulp-clean-css');
const config = require('./config');

gulp.task('css_common_bundle', () => {
    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/bootstrap/dist/css/bootstrap-theme.css',
        'asset/css/common/**/*.css'
    ])
        .pipe(concat('common.css'))
        .pipe(ifElse(config.isPROD, cleanCss))
        .pipe(gulp.dest('.build/css/common'));
});

gulp.task('css_app', () => {
    return gulp.src([
        '!asset/css/common/**/*.css',
        'asset/css/**'
    ])
        .pipe(ifElse(config.isPROD, cleanCss))
        .pipe(gulp.dest('.build/css'));
});

module.exports = ['css_common_bundle', 'css_app'];