var express = require('express');
var router = express.Router();
var Request = require('../models/Request');
var TutorMatch = require('../modules/tutorMatch');

var twilio = require('../modules/twilio.module');

router.get('/', function(req, res) {

    res.json({
        status: 200,
        msg: 'Hello World'
    });
});

router.post('/testR', function(req, res) {
  	// Add new tutor to DB
    Request.create({userID: '69', subject: 'Math 124', location: 'ODE', dateTime: new Date()}).then(function(req) {
        TutorMatch.tutorMatch(req);
        res.send(req);
    });
});

module.exports = router;
