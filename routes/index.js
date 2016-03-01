var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');
var Requests = require('../models/Requests');
var TutorMatch = require('../modules/tutorMatch');

var twilio = require('../modules/twilio.module');

router.get('/', function(req, res) {

	// these lines are testing the tutor match module for now
	var crap = {
	  "id": null,
	  "subject": "Math 125",
	  "location": "ODE",
	  "dateTime": "2016-03-01T08:16:53.910Z",
	  "updatedAt": "2016-03-01T08:16:53.910Z",
	  "createdAt": "2016-03-01T08:16:53.910Z"
	}

	TutorMatch.tutorMatch(crap , function(wass) {
		console.log("the stuff" + wass);
	});
	    res.json({
	        status: 200,
	        msg: 'yep'
	    });
	console.log('it works');
});

router.post('/testR', function(req, res) {
  	// Add request to db
  	// please ignore fake data for now
	Requests.sync().then(function() {
	    return Requests.create({userID: '69', subject: 'Math 124', location: 'ODE', dateTime: new Date()}).then(function(req) {
	        //TutorMatch.tutorMatch(req);
	        res.send(req);
	    });
	});
});

module.exports = router;
