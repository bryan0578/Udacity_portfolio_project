var gulp = require('gulp'),
	webserver = require('gulp-webserver'),

	source = 'development/',
	dest = 'production/';

gulp.task('webserver', function(){
gulp.src(dest)
	.pipe(webserver({
		livereload: true,
		open: true
	}));
});

gulp.task('default', ['webserver']);