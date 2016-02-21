var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json({
        status : 200,
        msg : 'Hello World'
    });
});

router.get('/tutors', function(req, res) {
    res.json({
        name : 'John',
        classes : ['CSE 142','MATH 124']
    });
});

module.exports = router;
