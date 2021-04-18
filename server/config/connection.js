// get the client
const mysql = require('mysql2');

const keys = require('./keys');
 
// Create the connection pool. The pool-specific settings are the defaults
const connection = mysql.createPool({
  host: keys.db.host,
  user: keys.db.user,
  password: keys.db.password,
  database: keys.db.database,
  timezone: '+5:30',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection.promise();