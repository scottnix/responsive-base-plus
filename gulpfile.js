// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

// Styles
gulp.task('styles', function() {
  return gulp.src('scss/style.scss')
    .pipe(sass({
      style: 'expanded',
      compass: true,
      require: ['susy']
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(''))
    .pipe(livereload(server))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Default task
gulp.task('default', ['styles', 'watch']);

// Watch
gulp.task('watch', function() {
  // Listen on port 35729
  server.listen(35729, function (err) {
    if (err) {
    return console.log(err);
  }
  // Watch .scss files
  gulp.watch('scss/**/*.scss', ['styles']);
  });
});

