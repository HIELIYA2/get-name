const mysql = require('mysql');
const NAME_URL = '/name';

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'mydb',
});

function nameRoutes(app) {
  // REST API:

  // TEST
  app.get('/test', (req, res) => {
    console.log('TEST');
    res.send('TEST');
  });

  // CREATE
  app.post(NAME_URL, (req, res) => {
    const name = req.body.name;
    let sql = `INSERT INTO persons (name) VALUES ('${name}')`;
    console.log(sql);
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log('1 name inserted');
    });
    return res;
  });

  // CREATE TABLE PERSON
  app.post(NAME_URL, (req, res) => {
    const name = req.body.name;
    let sql =
      'CREATE TABLE persons ( Personid int NOT NULL AUTO_INCREMENT,  name VARCHAR(255),  PRIMARY KEY (Personid))';
    console.log(sql);
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log('Table created');
    });
  });

  // READ - ALL
  app.get(NAME_URL, (req, res) => {
    db.query('SELECT * FROM persons', (err, result, fields) => {
      if (err) throw err;
      console.log(result);
      return result;
    });
  });

  // READ - BY ID
  app.get(`${NAME_URL}/:nameId`, (req, res) => {
    const nameId = req.params.nameId;
    let sql = `SELECT * FROM persons WHERE Personid = ${nameId}`;
    console.log(sql);
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      return result;
    });
  });

  //DELETE
  app.delete(`${NAME_URL}/:nameId`, (req, res) => {
    const nameId = req.params.nameId;
    let sql = `DELETE FROM persons WHERE Personid = ${nameId}`;
    console.log(sql);
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      return result;
    });
  });

  // UPDATE
  app.put(`${NAME_URL}/:nameId`, (req, res) => {
    const name = req.body.name;
    const nameId = req.params.nameId;
    let sql = `UPDATE persons SET name = '${name}' WHERE Personid = ${nameId}`;
    console.log(sql);
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result.affectedRows + ' updated');
    });
  });
}
module.exports = nameRoutes;
