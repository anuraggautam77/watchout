const webpack = require('webpack');
require("babel-polyfill");
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    //'eval-source-map'
   // devtool: 'eval',
 // watch: true,
    entry: {
        'app': ['babel-polyfill',
            './client/src/'
        ]
    },
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    devServer: {
        contentBase: './client/public',
        historyApiFallback: true,
        stats: 'minimal', // none (or false), errors-only, minimal, normal (or true) and verbose
        watch: true
    },
    //
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          
        })
    ]

});
