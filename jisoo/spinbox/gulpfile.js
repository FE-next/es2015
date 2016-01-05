var path          = require('path');
var gulp          = require('gulp');
var del           = require('del');
var watch         = require('gulp-watch');
var webpack       = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var runSequence   = require('run-sequence');

var ROOT          = __dirname;
var DIST_DIR      = path.join(ROOT, '/dist');
var SRC_DIR       = path.join(ROOT, '/src');

var config = {
  scripts: {
    taskname: 'scripts',
    src: path.join(SRC_DIR, '/**/*.js'),
    dist: DIST_DIR
  },

  clean: {
    taskname: 'clean',
    src: DIST_DIR
  },

  watch: {
    taskname: 'watch',
    src: path.join(SRC_DIR, '/**/*.js')
  }
};

gulp.task('dev', [config.clean.taskname], function() {

  runSequence(
    [config.scripts.taskname],
    config.watch.taskname
  )
});

gulp.task(config.clean.taskname, function() {

  del(config.clean.src);
});

gulp.task(config.scripts.taskname, function () {

  return gulp.src(config.scripts.src)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(config.scripts.dist));
});

gulp.task(config.watch.taskname, function() {

  watch(config.watch.src, function() {
    runSequence(config.scripts.taskname);
  })
});
