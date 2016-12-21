'use strict';
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	browserSync = require("browser-sync"),
    reload = browserSync.reload;



	var config = {
    server: {
        baseDir: "./"
    },
    tunnel: true,
    host: 'localhost',
    port: 9090,
    logPrefix: "Frontend_Devil"
};
	gulp.task('webserver', function () {
		browserSync(config);
	});

	gulp.task('scripts', function(){
		gulp.src([
			'./js/app.js',
			'./js/controllers/coachController.js',
			'./js/controllers/footballerController.js',
			'./js/controllers/teamController.js'
		])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./'))
	});
	gulp.task('watch',function(){
		gulp.watch('./js/**/*.js',['scripts']);
	});

	gulp.task('default', ['webserver','scripts', 'watch']);
