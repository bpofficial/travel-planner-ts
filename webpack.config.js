const path = require('path');
const productionConfig = require('./config/webpack.production.config');
const developmentConfig = require('./config/webpack.development.config');

module.exports = env => {
    switch(env.NODE_ENV) {
        case 'production':
            return productionConfig(env, path.resolve(__dirname));
        case 'development':
            return developmentConfig(env, path.resolve(__dirname));
        default:
            return developmentConfig(env, path.resolve(__dirname));
    }
};