'use strict';

const gulp = require('gulp');

gulp.task('font', () => {
    return gulp.src(['node_modules/bootstrap/dist/fonts/**'])
        .pipe(gulp.dest('.build/css/fonts'));
});

gulp.task('image', () => {
    return gulp.src(['asset/image/**'])
        .pipe(gulp.dest('.build/css/image'));
});

module.exports = ['font', 'image'];