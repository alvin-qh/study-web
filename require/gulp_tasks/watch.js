'use strict';

const watch = require('gulp-watch');
const sequence = require('run-sequence');

module.exports = () => {
    return watch(['asset/**', 'template/**'], function () {
        sequence('clean', 'js_bundle', 'css_bundle', 'static', 'deploy');
    });
};