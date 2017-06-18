'use strict';

const gulp = require('gulp');

gulp.task('font', () => {
    return gulp.src(['asset/image/**'])
        .pipe(gulp.dest('.build/css/image'));
});

gulp.task('image', () => {
    return gulp.src(['bower_components//bootstrap/dist/fonts/**'])
        .pipe(gulp.dest('.build/css/fonts'));
});

module.exports = ['font', 'image'];