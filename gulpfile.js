'use strict';

var gulp = require('gulp'),
    argv = require('yargs').argv,
    gulpif = require('gulp-if'),
    rename = require('gulp-rename'),
    mainBowerFiles = require('main-bower-files'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// Scripts
gulp.task('script', function() {
    gulp.src(mainBowerFiles('**/*.js', {
            overrides: {
                'jquery': {
                    // 'ignore': true
                }
            }
        }))
        .pipe(concat('vendor.js'))
        .pipe(gulpif(argv.production, uglify()))
        .pipe(gulpif(argv.production, rename({
            suffix: '.min'
        })))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', [ 'script' ]);

// And call with gulp my-js-task or gulp my-js-task --production.
