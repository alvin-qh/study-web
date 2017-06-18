'use strict';

const gulp = require('gulp');
const sequence = require('run-sequence');

const tasks = ['clean', 'init', 'js-bundle', 'css-bundle', 'static', 'deploy', 'watch'];

tasks.forEach(task => {
    gulp.task(task, require('./gulp_tasks/' + task));
});

gulp.task('default', () => sequence.apply(sequence, tasks));
