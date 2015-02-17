var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    del = require('del');

gulp.task('browserify', function(){
  gulp.src('tests/application.js')
    .pipe(browserify())
    .pipe(gulp.dest('build'));
});

gulp.task('clean:js', function(cb) {
  del([
    'build/application.js'
  ], cb);
});

gulp.task('default', function(){
  gulp.watch(['source/**/*.js', 'tests/**/*.js'], ['clean:js', 'browserify']);
});
