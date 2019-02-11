const path = require('path');
const productionConfig = require('./config/webpack.production.config');
const developmentConfig = require('./config/webpack.development.config');

module.exports = env => {
    if (env.NODE_ENV === 'production')
        return productionConfig(env, path.resolve(__dirname));

    if (env.NODE_ENV === 'development')
        return developmentConfig(env, path.resolve(__dirname));
};