'use strict';

// Production specific configuration
// =================================
var api = {
  protocol: 'http',
  hostname: 'localhost',
  port: '9090',
  version: 'v1'
};

api.url = api.protocol + '://' + api.hostname + ':' + api.port + '/' + api.version;
var applicationPath = '/client/app/';
var appIcon = '';
module.exports = {

  api: api,
  apppath:applicationPath,
  appIcon : appIcon
};
