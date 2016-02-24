var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');
var Tutors = require('../models/tutor');
var Classes = require('../models/class');
var sendgrid  = require('sendgrid')('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');
var Receipts = require('../modules/receipt.module');

router.get('/', function(req, res) {
    res.json({
        name : 'TESting',
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

router.get('/test', function(req,res){
    var subs = {
        "%name%": [
            "Ayush"
        ],
        "%class%": [
            "CSE 373"
        ],
        "%location%": [
            "Suzz"
        ],
        "%start_time%": [
            "10:59pm"
        ],
        "%end_time%": [
            "11:56pm"
        ],
        "%tutor_name%": [
            "Justin I."
        ],
        "%blocks%": [
            "3"
        ],
        "%subtotal": [
            "30"
        ],
        "%total%": [
            "31.20"
        ],
        "%date%": [
            "2/24/16"
        ]
    };

    Receipts.sendReceipt('ayush29f@uw.edu', subs);

    res.send('hello');
});

module.exports = router;