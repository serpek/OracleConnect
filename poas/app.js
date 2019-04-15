/**
 * Main application file
 */

'use strict';
var express = require('express');
var config = require('./config/environment');

// Setup server
var app = express(),
    server = require('http').createServer(app);

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
var exports;
exports = module.exports = app;