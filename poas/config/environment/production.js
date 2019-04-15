'use strict';

// Production specific configuration
// =================================
var api = {
    protocol: 'http',
    hostname: 'localhost',
    port: '9090',
    version: 'v1',
    user: "",
    password: "",
    connectionString: "localhost:1521/asdfasdDB"
};

var applicationPath = '/client/app/';
var appIcon = '';
module.exports = {
    api: api,
    apppath: applicationPath,
    appIcon: appIcon,
    user: process.env.NODE_ORACLEDB_USER || api.user,
    password: process.env.NODE_ORACLEDB_PASSWORD || api.password,
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || api.connectionString,
    externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};
