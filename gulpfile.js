var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var del = require('del');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var path = require('path');

var distFolder = 'dist/';

gulp.task('clean', function (cb) {
    return del([distFolder + '**'], cb);
});

gulp.task('uglify', function() {
	return gulp.src('src/*.js')
	.pipe(uglify())
	.pipe(gulp.dest(distFolder));
});

gulp.task('minify-css', function() {
	return gulp.src('src/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest(distFolder));
});

gulp.task('rename', function() {
	return gulp.src(distFolder + '**', { base: distFolder })
	.pipe(rename(function(path) {
		path.suffix = '.min';
	}))
	.pipe(gulp.dest(distFolder));
});

gulp.task('build', function (callback) {
    runSequence('clean', 'uglify', 'minify-css', 'rename', callback);
});

gulp.task('default', function () {
});