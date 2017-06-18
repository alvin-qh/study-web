'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const config = require('./config');

gulp.task('clean-build', () => {
    return gulp.src(config.paths.build())
        .pipe(clean(config.cleanOptions));
});

gulp.task('clean-dest', () => {
    return gulp.src(config.paths.dest())
        .pipe(clean(config.cleanOptions));
});

module.exports = ['clean-build', 'clean-dest'];