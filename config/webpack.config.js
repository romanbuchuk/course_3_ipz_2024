const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template:  path.resolve(__dirname, '../templates/index.html'),
    })],
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                }
            }],
        }]
    }
};

module.exports = config;