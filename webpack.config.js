const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, '/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],




}