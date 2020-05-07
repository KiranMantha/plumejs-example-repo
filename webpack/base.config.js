const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const WebpackPrebuild = require('pre-build-webpack');
const del = require('del');
const appconstants = {
    publicPath: '/',
    root: '../',
    sourceDir: '../src',
    buildDir: '../docs',
    node_modules: '../node_modules',
    plumeuiDir: '../node_modules/plumejs-ui'
}
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'eval-cheap-source-map',
    entry: ['./src/index.ts', './src/polyfills.ts'],
    output: {
        path: path.resolve(__dirname, appconstants.buildDir),
        publicPath: appconstants.publicPath,
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss', '.css']
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: ['html-loader']
            }, {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, "../tsconfig.json")
                    }
                }]
            }, {
                test: /\.(s*)css$/,
                use: ['css-loader', 'sass-loader']
            }, {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[name].[ext]'
                    } 
                }]
            }, {
                test: /\.(woff2?|ttf|eot)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: "head",
            minify: {
                collapseWhitespace: false
            }
        }),
        new WebpackPrebuild(() => {
            del([path.resolve(__dirname, appconstants.buildDir)])
        }),
        new CopyWebpackPlugin([
            {from:'src/images',to:'images'}
        ])
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true
                }
            })
        ],
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '-',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/i,
                    chunks: 'all'
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: {
            name: "runtime"
        }
    }
};