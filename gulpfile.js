var gulp = require('gulp');
var util = require('gulp-util');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
//var mocha = require('gulp-mocha');
//var minify = require('gulp-minify');
var runSequence = require('run-sequence');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('compile-ts', ['compile-src', 'compile-test']);

gulp.task('compile-test', function () {
    var tsProject = tsc.createProject('./src/tsconfig.json');
    return gulp.src(['./e2e/*.ts'])
        .pipe(tsProject())
        .on('error', util.log)
        .pipe(gulp.dest('./e2e/'));
});

gulp.task('compile-src', function () {
    var tsProject = tsc.createProject('./src/tsconfig.json');
    return gulp.src(['./src/app/**/*.ts'])
		.pipe(sourcemaps.init())
        .pipe(tsProject())
        .on('error', util.log)
		.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/app/'));
});

/*
gulp.task('test', function () {
    return gulp.src('./test/*.js', { read: false })
    // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', handleError);
});

gulp.task('watch', function () {
    gulp.watch(['./test/*.ts', './src/app/*.ts'], function () {
        runSequence('compile-ts', 'test');
    });
});*/

gulp.task('default', function () {
    runSequence('compile-ts');
});
