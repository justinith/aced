var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');

var Reviews = require('../models/review');
var Receipts = require('../modules/receipt.module');

router.get('/', function(req, res) {
    res.json({
        name : 'TESting Reviews'
    });
});

router.post('/send', function(req, res){

    var fakeUserID = 'nomnomnom';
    var fakeTutorID = 'blahblah';

    var rating = req.body.rating;
    var text = req.body.text;
    var sessID = req.body.sessionID;

    Reviews.create({rating: rating, text: text, sessionID: sessID, tutorID: fakeTutorID, userID: fakeUserID}).then(function(review){
        res.send(review);
    });
});

module.exports = router;