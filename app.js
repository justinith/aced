//
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var redis = require('redis');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var redisClient = redis.createClient();

var app = express();
var routes = require('./routes/index');
var tutors = require('./routes/tutors');
var reviews = require('./routes/reviews');
var receipts = require('./routes/receipts');

// app config
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'acedisgonnarocktheworldbruh',
    store: new redisStore({
        host: 'localhost',
        port: 6379,
        client: redisClient,
        ttl:  260
    }),
    saveUninitialized: false,
    resave: false
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app routes
app.use('/', routes);
app.use('/tutors', tutors);
app.use('/reviews', reviews);
app.use('/receipts', receipts);

module.exports = app;
