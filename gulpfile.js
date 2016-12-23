var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	imagemin = require('gulp-imagemin'),
	minify = require('gulp-minify'),

	source = 'development/',
	dest = 'production/';

gulp.task('javascript', function(){
	gulp.src(source + 'js/*.js')
		.pipe(minify())
		.pipe(gulp.dest(dest + 'js'));
});

gulp.task('compress-images', function(){
	gulp.src(source + 'images/**/*.{jpg, JPG, png}')
		.pipe(imagemin({ progressive: true, optimizationlevel: 7}))
		.pipe(gulp.dest(dest + 'images'));
});

gulp.task('webserver', function(){
gulp.src(dest)
	.pipe(webserver({
		livereload: true,
		open: true
	}));
});

gulp.task('watch', function(){
	gulp.watch(source +'js/**/*.js', ['javascript']);
	gulp.watch(source + 'images/**/*.{jpg, JPG, png}');
});

gulp.task('default', ['webserver', 'compress-images', 'watch', 'javascript']);