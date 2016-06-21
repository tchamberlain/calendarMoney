var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));


// config files
var db = require('./config').db;

//db conncection
mongoose.connect('mongodb://localhost/calMoney');
var connection = mongoose.connection;
connection.on('error', function (err) { console.log('db connection err:',err)});


// start listening to requests on port 8000
app.listen(8000);

// export our app for testing and flexibility, required by index.js
module.exports = app;
