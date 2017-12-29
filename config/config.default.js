const path = require('path');
const fs = require('fs');
const config = require('./env.config')

module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.security = {
    csrf: {
      enable: false,
    }
  };

  exports.sequelize = {
    dialect: 'mysql',
    database: config.database.nameDB,
    host: config.database.hostDB,
    port: config.database.port,
    username: config.database.userDB,
    password: config.database.passDB
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.keys = '123456';

  exports.middleware = [];

  return exports;
};
