//
var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();
var routes = require('./routes/index');

// app config
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// app routes
app.use('/', routes);

module.exports = app;
