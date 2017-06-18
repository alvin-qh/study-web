'use strict';

const gulp = require('gulp');
const config = require('./config');

const fonts = [
    config.paths.modules('bootstrap/fonts/**')
];

gulp.task('static-font', () => {
    return gulp.src(fonts)
        .pipe(gulp.dest(config.paths.build('fonts')))
});

module.exports = ['static-font'];