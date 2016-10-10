var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');

var runSequence = require('run-sequence');


gulp.task('sass', function(){
	return gulp.src('css/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.reload({
		stream: true
	}))
});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
})


gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('css/**/*.scss', ['sass']); 
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('js/**/*.js', browserSync.reload);
  // Other watchers
})


gulp.task('useref', function(){
  return gulp.src('*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
});



gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'useref'],
    callback
  )
})


gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})
