'use strict';

const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const merge = require('merge-stream');
const glob = require('glob');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const ifElse = require('gulp-if-else');
const listPath = require('./list-path');
const config = require('./config');

gulp.task('css-bundle-vendor', () => {
	return gulp.src([
		config.paths.modules('bootstrap/dist/css/bootstrap.css'),
		config.paths.modules('bootstrap/dist/css/bootstrap-theme.css')
	])
		.pipe(concat('vendor.css'))
		.pipe(cleanCss())
		.pipe(gulp.dest(config.paths.build('css')));
});

gulp.task('css-bundle-app', () => {
	const src = config.paths.source('css');
	const folders = listPath(src);
	return merge(
		folders.map((folder) => {
			return gulp.src(path.join(config.paths.source('css'), folder, '/**/*.css'))
				.pipe(ifElse(!config.isPROD, sourcemaps.init))
				.pipe(concat(folder + '.css'))
				.pipe(cleanCss())
				.pipe(ifElse(!config.isPROD, () => sourcemaps.write('./')))
				.pipe(gulp.dest(config.paths.build('css')));
		})
	)
});

module.exports = ['css-bundle-vendor', 'css-bundle-app'];