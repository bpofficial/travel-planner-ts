const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

function buildDevelopementConfig(env, dirname) {
    console.log('Start build for NODE_ENV: ', env.NODE_ENV);
    return {
        entry: dirname + '/src/index.tsx',
        devtool: 'cheap-module-eval-source-map',
        output: {
            path: dirname + '/dist',
            filename: 'index.js',
            publicPath: '/dist/',
            sourceMapFilename: 'bundle.map'
        },
        mode: 'development',
        resolve: {
            extensions: ['.js', '.json', '.ts', '.jsx', '.tsx'],
            alias: {
                Modules: dirname + '/src/Modules'
            }
        },
        devServer: {
            contentBase: dirname + '/src',
            hotOnly: true,
            overlay: true,
            publicPath: '/dist/',
            host: '0.0.0.0',
            public: '0.0.0.0',
            disableHostCheck: true,
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
                                //'@babel/plugin-syntax-dynamic-import',
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-proposal-optional-chaining',
                                'react-hot-loader/babel'
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader']
                }
            ]
        },
        plugins: [
            new FriendlyErrorsWebpackPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    };
}

module.exports = buildDevelopementConfig;