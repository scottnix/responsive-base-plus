// Load gulp and Plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload');

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
    .pipe(livereload());
});

// Watch
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('scss/**/*.scss', ['styles']);
});

// Default Tasks
gulp.task('default', ['styles', 'watch']);