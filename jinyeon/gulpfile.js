var fs = require('fs');
var path = require('path');

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');


var babel = require('gulp-babel');
var concat = require('gulp-concat');

var plugins = require('gulp-load-plugins')();

var webpackConfig = require('./webpack.config.js');

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

gulp.task('build:spinbox-babel', function () {
    return gulp.src([ 'spinbox/src/js/Model.js', 'spinbox/src/js/ViewController.js', 'spinbox/src/js/SpinBox.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('SpinBox.js'))
        .pipe(gulp.dest('spinbox/dist'));
});

gulp.task('wp:spinbox-babel', function(){
    webpack(webpackConfig, function(err, stats){
       gutil.log('[webpack]', stats.toString());
    });
});
