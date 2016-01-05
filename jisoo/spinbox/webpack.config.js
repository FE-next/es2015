var path      = require('path');
var webpack   = require('webpack');

var ROOT          = __dirname;
var DIST_DIR      = path.join(ROOT, '/build');
var SRC_DIR       = path.join(ROOT, '/src');

var config = {
  entry: {
    app: path.join(SRC_DIR, '/entry.js'),
    vendor: ['jquery']
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
};

module.exports = config;

