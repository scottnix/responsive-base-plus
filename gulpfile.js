// Load gulp and Plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

// Styles
gulp.task('styles', function() {
  return sass('scss/style.scss', {
      style: 'expanded',
      require: ['susy']
    })
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest(''))
    .pipe(livereload(server))
});

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

// Default Tasks
gulp.task('default', ['styles', 'watch']);