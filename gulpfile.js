var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
    })
})

// gulp sass
gulp.task('sass', function() {
    return gulp.src('src/css/scss/**/*.scss') // pulls all .scss files & its children
      .pipe(sass()) // scss files --> css
      .pipe(gulp.dest('src/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

// watch
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('src/css/scss/**/*.scss', ['sass']); 
    // Other watchers
});