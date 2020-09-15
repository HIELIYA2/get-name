const express = require('express');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const nameRoutes = require('./name-route');

let server = require('http').Server(app);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
nameRoutes(app);
