
var options = {
    // devtool을 sourcemap으로 설정하면 .map 파일이 생성됨
    devtool: 'sourcemap',
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'bower_components']
    },

    entry: [
        './src/spinbox'
    ],
    output: {
        path: './dist',
        filename: 'spinbox.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};


module.exports = options;