const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLMinifier = require('html-minifier');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

function buildProductionConfig(env, dirname) {
    console.log('Start build for NODE_ENV: ', env.NODE_ENV);

    return {
        entry: dirname + '/src/index.tsx',
        output: {
            path: dirname + '/dist',
            filename: 'index.js',
            publicPath: '/',
            sourceMapFilename: 'bundle.map'
        },
        mode: 'production',
        resolve: {
            extensions: ['.js', '.json', '.ts', '.jsx', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.ts|\.tsx|\.js|\.jsx$/,
                    //include: dirname + '/src',
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        modules: false,
                                        debug: true,
                                        targets: {
                                            browsers: ['cover 99%']
                                        }
                                    }
                                ],
                                '@babel/preset-react',
                                '@babel/typescript'
                            ],
                            plugins: [
                                '@babel/plugin-syntax-dynamic-import',
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-proposal-optional-chaining'
                            ]
                        }
                    }
                }
            ]
        },
        plugins: [
            new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
            new CleanWebpackPlugin(['dist']),
            new UglifyJsPlugin({
                parallel: true,
                sourceMap: true,
                cache: true
            }),
            new webpack.SourceMapDevToolPlugin({
                filename: 'sourcemaps/[name].js.map',
                lineToLine: true
            }),
            new CopyWebpackPlugin(
                [
                    {
                        from: dirname + '/src/index.html',
                        to: dirname + '/dist',
                        transform(htmlAsBuffer) {
                            return Buffer.from(
                                HTMLMinifier.minify(htmlAsBuffer.toString('utf8'), {
                                    collapseWhitespace: true,
                                    collapseBooleanAttributes: true,
                                    collapseInlineTagWhitespace: true
                                })
                            );
                        }
                    }
                ],
                {}
            )
        ],
        performance: {
            hints: 'warning'
        }
    };
}

module.exports = buildProductionConfig;