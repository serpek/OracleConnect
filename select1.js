
var oracledb = require('oracledb');
var dbConfig = require('./dbconfig.js');

// Get a non-pooled connection
oracledb.getConnection(
  {
    user          : dbConfig.user,
    password      : dbConfig.password,
    connectString : dbConfig.connectString
  },
  function(err, connection) {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      'SELECT * FROM FACT_SATIS_EKRANI_V',
      {},
	  {
		outFormat: oracledb.OBJECT
      },
      function(err, result) {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result.metaData); // [ { name: 'DEPARTMENT_ID' }, { name: 'DEPARTMENT_NAME' } ]
        console.log(result.rows);     // [ [ 180, 'Construction' ] ]
        doRelease(connection);
      });
  });

// Note: connections should always be released when not needed
function doRelease(connection) {
  connection.close(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}
