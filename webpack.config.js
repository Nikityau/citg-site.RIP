const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src',"index.tsx"),
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx"]
    },
    output: {
        filename: "[name].[contenthash].bundle.js",
        assetModuleFilename: "assets/images/[name][ext]",
        sourceMapFilename: "[name].js.map",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        clean: true,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin()
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src')
        },
        historyApiFallback:true,
        compress:true,
        port: 3000,
        open: true,
        hot: true,
        client: {
            reconnect: true
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /\.module\.css/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.module\.css$/,
                use: ['style-loader', {
                    loader: "css-loader",
                    options: {
                        modules: {
                            localIdentName: '[name]__[contenthash]'
                        }
                    }
                }]
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /\.module\.s[ac]ss/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.module\.s[ac]ss$/,
                use: ["style-loader",{
                    loader: "css-loader",
                    options: {
                        modules: {
                            localIdentName: '[name]-[local]__[contenthash]'
                        }
                    }
                }, 'sass-loader']
            },
            {
                test: /\.[cm]?js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.jsx/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'public', 'favicon.png'),
            minify: false
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].bundle.css'
        }),
        new ESLintWebpackPlugin({
            extensions: ['js', 'ts', 'jsx', 'tsx']
        })
    ]
}