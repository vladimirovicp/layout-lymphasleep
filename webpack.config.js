const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractOlugin = require('mini-css-extract-plugin');

const isProd = !isDev;
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/main.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template:  path.resolve(__dirname, 'src/index.html'),
            filename: "index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractOlugin({
            filename: `./css/${filename('css')}`,
        })
    ],
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    }
};