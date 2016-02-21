var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');
var Tutors = require('../models/tutor');
var Classes = require('../models/class');

router.get('/', function(req, res) {
    res.json({
        name : 'Susan',
        classes : ['CSE 142','MATH 124']
    });
});

router.get('/tutorinfo/:id', function(req, res) {
    Tutors.findAll({
    	where: {
    		id: req.params.id
    	}
	}).then(function(tutor){
    	res.send(tutor);
    });
});

router.post('/create', function(req, res) {
    // Get all the attributes from the sent JSON
    var first = req.body.firstname;
    var last = req.body.lastname;
    var cell = req.body.cell;
    var email = req.body.email;
    var desc = req.body.desc;
    var theClasses = req.body.takenClasses;

    // Add new tutor to DB
    Tutors.create({firstName: first, takenClasses: theClasses, lastName: last, phoneNumber: cell, email: email, description: desc}).then(function(tutor) {
        res.send(tutor);
    });
});

module.exports = router;