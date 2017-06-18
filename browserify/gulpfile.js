#!/usr/bin/env node

(function (gulp, sequence) {
    'use strict';

    const tasks = ['clean', 'js_bundle', 'css_bundle', 'static', 'deploy', 'watch'];

    tasks.forEach((name) => {
        gulp.task(name, require('./gulp_tasks/' + name));
    });

    gulp.task('default', () => sequence('assets', 'watch'));
    gulp.task('assets', () => sequence('clean', 'js_bundle', 'css_bundle', 'static', 'deploy'));
})
(
    require('gulp'),
    require('run-sequence')
);