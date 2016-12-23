var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	imagemin = require('gulp-imagemin'),

	source = 'development/',
	dest = 'production/';

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
	gulp.watch(source + 'images/**/*.{jpg, JPG, png}');
});

gulp.task('default', ['webserver', 'compress-images', 'watch']);