const path = require('path');
const webpack = require('webpack');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {

    entry: {
        app: './index'
    },

    output: {
        path: './build',
        filename: 'index.js'
    },

    devtol: 'cheap-module-eval-source-map',

    devServer: {
        inline: true,
        port: 7777
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ["es2015", "react"]
            }
        },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', '!css-loader!postcss-loader'),
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style!css'),
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader')
            },
            {
                test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('index.css'),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],

    lessPlugins: [
        new LessPluginAutoPrefix({browsers: ['last 3 version']})
    ]

};