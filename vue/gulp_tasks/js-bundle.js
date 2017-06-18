'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemap = require('gulp-sourcemaps');
const ifElse = require('gulp-if-else');
const webpack = require('webpack');
const config = require('./config');

gulp.task('ie-support-bundle', () => {
    return gulp.src([
        config.paths.bower('html5shiv/dist/html5shiv.js'),
        config.paths.bower('respond/dest/respond.src.js')
    ])
        .pipe(concat('ie-support.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.build('js')));
});


gulp.task('js-vendor-bundle', () => {
    return gulp.src([
        config.paths.modules('jquery/dist/jquery.js'),
        config.paths.modules('bootstrap/dist/js/bootstrap.js'),
        config.paths.modules('vue/dist/vue.js')
    ])
        .pipe(ifElse(!config.isPROD, sourcemap.init))
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(ifElse(!config.isPROD, () => sourcemap.write('./')))
        .pipe(gulp.dest(config.paths.build('js')));
});

gulp.task('js-app-bundle', (callback) => {
    return webpack(require('../webpack.config')()).run((err, stats) => {
        callback(err);
    });
});

module.exports = ['ie-support-bundle', 'js-vendor-bundle', 'js-app-bundle'];