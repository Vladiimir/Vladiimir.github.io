webpack = require('webpack');
path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        bundle: './js/main.js',
        styles: './scss/styles.scss'
    },
    output: {
        filename: '[name].js',
        path: "./lib",
        library: '[name]'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ]
};