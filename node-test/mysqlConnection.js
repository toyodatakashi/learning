var mysql = require('mysql');

// local用
// var dbConfig = {
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'bulletin_board'
// };

// リリース用
var dbConfig = {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'b07fc847b6c0c6',
  password: 'b17101e7',
  database: 'heroku_0fc5915aa1820ed'
};

var connection = mysql.createConnection(dbConfig);

// これはHerokuのMySQLのためのハックです。
setInterval(function() {
  connection.query('SELECT 1');
}, 5000);

module.exports = connection;