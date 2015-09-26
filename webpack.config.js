var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app/App.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel']
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.woff(2)?$/,
            loader: "url-loader"
        }, {
            test: /\.(ttf|eot|svg)?$/,
            loader: "file-loader"
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
};
