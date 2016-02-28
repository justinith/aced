var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');
var Tutors = require('../models/tutor');
var Classes = require('../models/class');
var sendgrid  = require('sendgrid')('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');


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
    var schedule = req.body.schedule;

    // Add new tutor to DB
    Tutors.create({firstName: first, takenClasses: theClasses, lastName: last, phoneNumber: cell, email: email, description: desc, schedule: schedule}).then(function(tutor) {
        res.send(tutor);
    });
});

router.get('/email', function(req,res){

    var Email = sendgrid.Email;

    var from_address = "team@justaced.com";

    // YOUR TO ADDRESS(ES)
    var to_address = "justin.ith12@gmail.com";

    // SUBJECT
    var subject = "ACED Recepit";

    // TEXT BODY
    var text_body = "Please get in touch with us if you have any concerns or questions about your session charge or any other inquiries.";

    // HTML BODY
    var html_body = "Please get in touch with us if you have any concerns or questions about your session charge or any other inquiries.";

    var email = new Email({
        to:         to_address,
        from:       from_address,
        subject:    subject,
        text:       text_body,
        html:       html_body
    });

    var recipients = [
        "justin.ith12@gmail.com"
    ];
    for (var i = 0; i < recipients.length; i++) {
        email.addTo(recipients[i]);
    }

    // ADD THE CATEGORIES
    var categories = [
        "Recepit"
    ];
    for (var i = 0; i < categories.length; i++) {
        email.addCategory(categories[i]);
    }

    // ADD THE SUBSTITUTION VALUES
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
    for (var tag in subs) {
        email.addSubstitution(tag, subs[tag]);
    }

        email.setFilters({
            'templates': {
                'settings': {
                    'enable': 1,
                    'template_id' : '3ac9aa8e-3004-4aeb-b52c-f4bf0e48aa68',
                }
            }
        });

        sendgrid.send(email, function(err, json) {
          if (err) { return console.error(err); }
          console.log(json);
          res.send('Sent to ' + to_address + '!');
        });
    });

module.exports = router;