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
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    limit: 10000
                }
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