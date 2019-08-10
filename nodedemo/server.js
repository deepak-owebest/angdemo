const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
//constants
var config = require('./conf/config');
//Port
port = config.port || 3004;
app.use(cors());
app.listen(port)

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//API routes
var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route
