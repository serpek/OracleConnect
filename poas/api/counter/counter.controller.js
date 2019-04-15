'use strict';
var oracledb = require('oracledb'),
    config = require('../../config/environment');

exports.index = function(req, res) {

    oracledb.getConnection({
            user: config.user,
            password: config.password,
            connectString: config.connectString
        },
        function(err, connection) {
            if (err) {
                console.error(err.message);
                return;
            }
            connection.execute(
                'SELECT * FROM FACT_SATIS_EKRANI_V', {}, {
                    outFormat: oracledb.OBJECT
                },
                function(err, result) {
                    if (err) {
                        console.error(err.message);
                        return res.json({ "result": { "error": true, "reason": err.message } });
                        doRelease(connection);
                        return;
                    }
                    console.log(result.metaData);
                    console.log(result.rows);
                    return res.json({ "result": result.rows });
                    doRelease(connection);
                });
        });

    function doRelease(connection) {
        connection.close(
            function(err) {
                if (err) {
                    console.error(err.message);
                }
            });
    }
};