var fs = require('fs');
var path = require('path');

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');

var plugins = require('gulp-load-plugins')();


// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

gulp.task('build:spinbox-babel', function () {
    return gulp.src('spinbox/src/js/SpinBox.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('spinbox/dist'));
});
