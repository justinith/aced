var express = require('express');
var router = express.Router();

var twilio = require('../modules/twilio.module');

router.get('/', function(req, res) {
    res.json({
        status: 200,
        msg: 'Hello World'
    });
});
router.post('/sms', twilio.reciever);
module.exports = router;
