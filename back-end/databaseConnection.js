var mysql2 = require('mysql2');

var connection = mysql2.createConnection({
  host: '100.26.97.13',
  port: 3306,
  user: 'foo',
  password: 'password',
  database: 'overview'
});

connection.connect((err) => {
  console.log(err);
  console.log('You have connected to the database!')
});

module.exports = connection;