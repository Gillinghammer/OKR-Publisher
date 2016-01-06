var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: path.resolve(__dirname, 'src/js/entry.js'),
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [node_modules_dir],
            loader: 'babel?stage=0'
        }, {
            test: /\.scss$/,
            include: /src/,
            loaders: [
                'style',
                'css',
                'autoprefixer?browsers=last 3 versions',
                'sass?outputStyle=expanded'
            ]
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'url?limit=8192',
                'img'
            ]
        }]
    }
};

module.exports = config;
