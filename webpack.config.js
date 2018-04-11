const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, "/src/public/")
                ],
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "src/public"),
        port: 3000
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.ContextReplacementPlugin(
            // fixes WARNING Critical dependency: the request of a dependency is an expression
            /(.+)?parse5(\\|\/)(.+)?/,
            path.join(__dirname, 'src')
        ),
        new workboxPlugin.InjectManifest({
            swSrc: './src/public/service-worker.js',
            // As opposed to the impotent 'include' method, the glob* method actually works. But, it produces a warning in the console. The warning (and the accompanying https://goo.gl/EQ4Rhm page) does not make sense and should not probably be logged in the console at all.
            globDirectory: './src/public/',
            globPatterns: ['**/*.{html,js,css,svg,png,ico,woff,woff2,ttf}'],
        })
    ]
};