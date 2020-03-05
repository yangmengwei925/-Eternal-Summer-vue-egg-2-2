/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config    = exports = {};
  const writeList = require('./writeList');

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582526804220_6280';

  config.middleware = ['jwt'];
  config.jwt        = writeList;

  const userConfig = {   
    security : {csrf: false},
    mysql : {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'web',
      },
      app: true,
      agent: false
    },
    validate:{
      convert:false, //不开启类型转换
      validateRoot:false //被验证的变量不限制对象
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
