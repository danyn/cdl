var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('style', function () {
    return gulp.src('src/sass/critical/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['scss']
        }))
        .pipe(gulp.dest('_includes/critical'));
});
