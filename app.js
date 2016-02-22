//
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
var routes = require('./routes/index');
var tutors = require('./routes/tutors');

// app config
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app routes
app.use('/', routes);
app.use('/tutors', tutors);

module.exports = app;
