const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
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
            template: "./src/public/index.html",
            filename: "./index.html"
        })
    ]
};