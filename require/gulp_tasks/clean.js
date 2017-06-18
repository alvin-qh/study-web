'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');

module.exports = () => {
    return gulp.src(['www', '.build'], {read: false})
        .pipe(clean({force: true}));
};