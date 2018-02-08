const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                    loader: 'css-loader',
                    options: {
                      sourceMap: true,
                   minimize: true,
                    },
                  }, {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: true,
                      options: {
                        plugins: function () {
                       return [
                    require('autoprefixer'),
                       ];
                     },
                   },
                 },
               }, {
                 loader: 'sass-loader',
                 options: {sourceMap: true},
               }],
                }),
            }
        ]
    },
    // devServer: {
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     stats: "errors-only",
    //     open: true
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Starter Projet',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
}