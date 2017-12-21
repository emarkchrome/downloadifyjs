var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', ['lint'], function() {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['lint'], function() {
	return gulp.src('src/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
})

gulp.task('lint', function() {
  return gulp.src('src/*.js')
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format());
})
