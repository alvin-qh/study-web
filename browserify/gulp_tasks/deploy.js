'use strict';

const gulp = require('gulp');
const rev = require('gulp-rev');
const replace = require('gulp-rev-collector');
const sequence = require('run-sequence');
const minifyHtml = require('gulp-minify-html');
const ifElse = require('gulp-if-else');
const config = require('./config');

gulp.task('manifest_css', () => {
    return gulp.src('.build/css/**')
        .pipe(rev())
        .pipe(gulp.dest('www/asset/css'))
        .pipe(rev.manifest({path: 'manifest_css.json'}))
        .pipe(gulp.dest('www/asset/css'))
});

gulp.task('manifest_js', () => {
    return gulp.src('.build/js/**')
        .pipe(rev())
        .pipe(gulp.dest('www/asset/js'))
        .pipe(rev.manifest({path: 'manifest_js.json'}))
        .pipe(gulp.dest('www/asset/js'))
});

gulp.task('replace_css', () => {
    return gulp.src([
        'www/asset/**/manifest_*.json',
        'www/asset/css/**/*.css'
    ])
        .pipe(replace())
        .pipe(gulp.dest('www/asset/css'))
});

gulp.task('replace_js', () => {
    return gulp.src([
        'www/asset/**/manifest_*.json',
        'www/asset/js/**/*.js'
    ])
        .pipe(replace())
        .pipe(gulp.dest('www/asset/js'))
});

gulp.task('replace_template', () => {
    return gulp.src([
        'www/asset/**/manifest_*.json',
        'template/**/*.html'
    ])
        .pipe(replace({
            replaceReved: true,
            dirReplacements: {
                'css/': 'asset/css/',
                'js/': 'asset/js/'
            }
        }))
        .pipe(ifElse(config.isPROD, () => {
            minifyHtml({
                empty: true,
                spare: true
            })
        }))
        .pipe(gulp.dest('www'));
});

gulp.task('replace', ['manifest_css', 'manifest_js'], () => sequence('replace_css', 'replace_js', 'replace_template'));

module.exports = ['replace'];