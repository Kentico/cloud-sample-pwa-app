const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

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
        )        
    ]
};