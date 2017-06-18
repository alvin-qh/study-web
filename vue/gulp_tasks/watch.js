'use strict';

const gulp = require('gulp');
const _ = require('lodash');
const path = require('path');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const sequence = require('run-sequence');
const webpack = require('webpack');
const deploy = require('./deploy');
const config = require('./config');

gulp.task('watch-css', () => {
    gulp.watch(config.paths.source('css/**/*.css'), e => {
        gutil.log('file "' + e.path + '" is ' + e.type);

        const pathName = path.dirname(e.path);
        const folder = path.relative(config.paths.source('css'), pathName);

        gulp.task('css-changed', () => {
            return gulp.src(path.join(pathName, '/**/*css'))
                .pipe(concat(folder + '.css'))
                .pipe(gulp.dest(config.paths.build('css')));
        });

        gulp.task('css-deploy', () => {
            return gulp.src(path.join(config.paths.build('css'), folder + '.css'))
                .pipe(gulp.dest(config.paths.dest('css')));
        });

        sequence('css-changed', 'css-deploy');
    });
});

gulp.task('watch-js', () => {
    function runWebpack() {
        const webpackConfig = require('../webpack.config.js');

        webpack(_.merge(webpackConfig(), {watch: true})).watch(100, (err, stats) => {
            gutil.log('[webpack:watch]', stats.toString('{color: true}'));
        });
    }

    gulp.watch(config.paths.source('js/**/*.js'), e => {
        if (e.type === 'added' || e.type === 'deleted') {
            gutil.log('file "' + e.path + '" is ' + e.type);
            runWebpack();
        }
    });

    runWebpack();
});

module.exports = ['watch-css', 'watch-js'];