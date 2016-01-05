// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

var dist = './static/';
var js = './src/';

gulp.task('browserify', function() {
    return  browserify(
        js + 'app.js',
        {debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('spinBox.bundle.js'))
        .pipe(gulp.dest(dist));
});


// Default Task
gulp.task('default', ['browserify']);