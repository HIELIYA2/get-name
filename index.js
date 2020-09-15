const express = require('express');
const path = require('path');

const GetName = require('./db_connection');

const app = express();
let server = require('http').Server(app);
app.use(express.static(path.join(__dirname, './client/build')));

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
  GetName.GetName();
});
