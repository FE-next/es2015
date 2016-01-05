var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

gulp.task('build', function(cb){
    webpack(webpackConfig, function(err, stats) {
        cb();
    });
});