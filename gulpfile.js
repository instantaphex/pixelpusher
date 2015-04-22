var gulp = require('gulp');

var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

gulp.task('connect', function () {
	connect.server({
		livereload: true
	});
});

gulp.task('js', function () {
	gulp.src('./js/*.js')
		.pipe(connect.reload());
});

gulp.task('browserify', function () {
	gulp.src('./src/index.js')
		.pipe(browserify({
			insertGlobals: true,
			debug: !gulp.env.production
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./js'));
});

gulp.task('default', ['browserify', 'connect', 'js', 'watch']);

gulp.task('watch', function() {
	gulp.watch(['./src/*.js'], ['js']);
});
