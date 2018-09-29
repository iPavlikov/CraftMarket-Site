var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.sass')
    	.pipe(sass())
     	.pipe(gulp.dest('app/css'))
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('build',['clean', 'sass'], function() {
    var buildCss = gulp.src(
    	'app/css/main.css')
      .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('app/js/**/*')
      .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass']);