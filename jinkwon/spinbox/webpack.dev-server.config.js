var webpackConfig = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var gutil = require('gulp-util');

gulp.task('wp:dev-server', function (callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
    var WriteFilePlugin = require('write-file-webpack-plugin');

    myConfig.plugins.push(new WriteFilePlugin());

    myConfig.plugins.push(new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        files: ['ex/index.html', 'dist/*.js'],
        startPath: '/ex/',
        server: {
        }
    }));

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        stats: {
            colors: true
        }
    }).listen(8080, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    });
});