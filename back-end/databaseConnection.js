var mysql2 = require('mysql2');

var connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'overview'
});

connection.connect((err) => {
  console.log('You have connected to the database!')
});

module.exports = connection;