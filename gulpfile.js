var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('mocha', function() {
  return gulp.src('./specs/**/*.specs.js', {read: false})
  .pipe(mocha({ reporter: 'nyan'}))
  .on('error', gutil.log);
})

gulp.task('test', function(){
  gulp.watch(['src/**', 'specs/**'], ['mocha'])
})
