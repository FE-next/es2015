/**
 * Created by chy58 on 2016-01-05.
 */
module.exports = {
    entry: './spinbox/src/js/SpinBox.js',
    output: {
        path: './spinbox/dist',
        filename: 'SpinBox.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};