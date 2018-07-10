let path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')


module.exports = {
    mode: 'development',
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    context: path.resolve(__dirname),
    entry: {
        app: path.join(__dirname, './src/index.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader',
                options: {
                    limit: 4000000
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'a panoramic image',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'none',
    devServer: {
        clientLogLevel: 'warning',
        hot: true,
        contentBase: false, 
        compress: true,
        host: 'localhost',
        port: 8080,
        open: true,
        overlay: { 
            warnings: false, 
            errors: true 
        }
    },
}