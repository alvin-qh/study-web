#!/usr/bin/env node

'use strict';

const gulp = require('gulp');
const sequence = require('run-sequence');

const tasks = ['clean', 'js_bundle', 'css_bundle', 'static', 'deploy', 'watch'];

tasks.forEach((task) => {
    gulp.task(task, require('./gulp_tasks/' + task))
});

gulp.task('default', () => sequence('assets', 'watch'));
gulp.task('assets', () => sequence('clean', 'js_bundle', 'css_bundle', 'static', 'deploy'));