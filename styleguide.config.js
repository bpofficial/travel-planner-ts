const path = require('path')
const wpConfig = require('./config/webpack.development.config');
const dirname = path.resolve(__dirname);
module.exports = {
    components: 'src/Modules/*/Components/*/[a-z]*.tsx',
    assetsDir: 'styleguide/',
    propsParser: require('react-docgen-typescript').parse,//.withCustomConfig('./tsconfig.json', [parserOptions]).parse,
    /*
    webpackConfig() {
        return wpConfig({NODE_ENV:'development'}, path.resolve(__dirname), '/styleguide')
    },*/
    webpackConfig: {
        entry: dirname + '/src/index.tsx',
        devtool: 'cheap-module-eval-source-map',
        output: {
            path: dirname + '/dist/styleguide',
            filename: 'index.js',
            publicPath: '/dist/styleguide/',
            sourceMapFilename: 'bundle.map'
        },
        mode: 'development',
        resolve: {
            extensions: ['.js', '.json', '.ts', '.jsx', '.tsx'],
            alias: {
                Modules: dirname + '/src/Modules'
            }
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
        }
    },
    sections: [
        {
            name: 'Intro',
            content: 'docs/Intro.md'
        },
        {
            name: 'Modules',
            sections: [
                {
                    name: 'Container',

                }
            ]
        }
    ]
}