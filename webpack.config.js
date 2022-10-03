const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProd = !isDev;
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/main.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app'),
        publicPath: '',
    },
    devServer: {
        historyApiFallback: true,
        // contentBase: path.resolve(__dirname, 'app'),
        static: {
            directory: path.resolve(__dirname, 'app'),
        },
        open: true,
        compress: true,
        hot: true,
        port: 3000,

        // static: {
        //     directory: path.join(__dirname, 'public'),
        // },
        // compress: true,
        // port: 9000,
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
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,'src/assets'),  to: path.resolve(__dirname, 'app')
                }
            ]
        }),
    ],
    module:{

        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev
                    },
                }, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                // use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: (resourcePath, context) => {
                            return path.relative(path.dirname(resourcePath), context) + '/';
                        }
                    }
                }, "css-loader",
                    'sass-loader'
                ],
            },
            {
                test: /\.(?:|gif|png|jpg|jpeg|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `./img/${filename('[ext]')}`,
                            publicPath: "",
                        }
                    }
                ],
            },
        ]
    }
};