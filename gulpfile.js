var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	imagemin = require('gulp-imagemin'),
	minify = require('gulp-minify'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	precss = require('precss'),
	cssnano = require('cssnano'),
	htmlcpr = require('gulp-htmlcpr'),
	

	source = 'development/',
	dest = 'production/';

gulp.task('html', function(){
	gulp.src(source + 'index.html')
	.pipe(htmlcpr())
	.pipe(gulp.dest(dest));
});

gulp.task('css', function(){
	gulp.src(source + '**/*.css')
		.pipe(postcss([
			precss(),
			autoprefixer(),
			cssnano()
			]))
		.pipe(gulp.dest(dest));
});


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
	gulp.watch(source +'**/*.css', ['css']);
	gulp.watch(source +'js/**/*.js', ['javascript']);
	gulp.watch(source + 'images/**/*.{jpg, JPG, png}');
});

gulp.task('default', ['compress-images', 'html']);
