const config = require(`./${process.env.NODE_ENV ? process.env.NODE_ENV : 'development'}`);
module.exports = config;