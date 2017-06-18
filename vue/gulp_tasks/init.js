'use strict';

const gulp = require('gulp');
const config = require('./config');

gulp.task('js-common-init', () => {
    return gulp.src([
        config.paths.bower('remarkable-bootstrap-notify/bootstrap-notify.js')
    ])
        .pipe(gulp.dest(config.paths.source('js/common')));
});

gulp.task('css-common-init', () => {
    return gulp.src([
        config.paths.bower('animate.css/animate.css')
    ])
        .pipe(gulp.dest(config.paths.source('css/common')));
});

module.exports = ['js-common-init', 'css-common-init'];