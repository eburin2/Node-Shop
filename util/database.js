const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node_complete',
  password: 'toodie1a'
});

module.exports = pool.promise();
