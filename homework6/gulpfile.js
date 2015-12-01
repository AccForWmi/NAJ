var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var jshint = require('gulp-jshint');

var path = {
  files: ['*.txt'],
  js: ['js/*.js']
};

gulp.task('js', function() {
  del(['build/build.js']);
  return gulp.src(path.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('build.js'))
    .pipe(gulp.dest('build/'));
});

gulp.task('files', function() {
  del(['build/result.txt']);
  return gulp.src(path.files)
    .pipe(concat('result.txt'))
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
  gulp.watch(path.files, ['files']);
  gulp.watch(path.js, ['js']);
});

gulp.task('default', ['watch', 'files', 'js']);
