var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');

var Receipts = require('../modules/receipt.module');


router.get('/', function(req, res) {
    res.json({
        name : 'TESting Receipts',
        classes : ['CSE 142','MATH 124']
    });
});

router.post('/send', function(req,res){
    
    var sessionID = req.body.sessionID;

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

    var targetEmail = req.body.email;

    Receipts.sendReceipt(targetEmail, subs);

    res.send('Send Email');
});

module.exports = router;