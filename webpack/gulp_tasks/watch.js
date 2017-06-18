'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const sequence = require('run-sequence');

module.exports = () => {
    return watch([
        'asset/**',
        'gulp_tasks/**'
    ], () => sequence('clean', 'js_bundle', 'css_bundle', 'font', 'deploy'));
};