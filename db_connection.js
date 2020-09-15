var mysql = require('mysql');

var con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'mydb',
});

function GetName(params) {
  con.connect(function (err) {
    if (err) throw err;
    con.query('SELECT * FROM customers', function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
}

module.exports = {
  GetName,
};
