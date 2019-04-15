/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var config = require('./config/environment');
module.exports = function (app) {
    app.use("/api/getCount", require('./api/counter'));

    app.route('/:url(api|components|app|bower_components|assets)/*')
        .get(errors[404]);

    //Send Request to App (client) Index
    app.route('/*')
        .get(function (req, res) {
            console.log(app.get('appPath'))
            res.sendfile(app.get('appPath') + 'index.html');
        });
};
