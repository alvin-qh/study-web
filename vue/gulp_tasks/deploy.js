'use strict';

const gulp = require('gulp');
const config = require('./config');

gulp.task('deploy-everything', () => {
    return gulp.src(config.paths.build('**'))
        .pipe(gulp.dest(config.paths.dest()));
});

module.exports = ['deploy-everything'];