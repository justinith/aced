// This module will take care of all the interactions with twilio
// only this module will interact with the twilio node_module

// Twilio Credentials
var accountSid = 'AC9f6f074a667db5b4dcc4d266b13137c2';
var authToken = '4ad97748c64ed6b6af5d9ac9c5e9d1f1';
var phoneNumber = '+16505420375';
var twilio = require('twilio');
var client = require('twilio')(accountSid, authToken);
var textRouter = require('./textRouter.module');

// Pre: Takes in a number and message.
// Post: Send the message to the phone number and takes care of edge case.
exports.sms = function(to, msg, response) {
    client.sendMessage({
        to: to,
        from: phoneNumber,
        body: msg
    }, function(err, message) {
        response(err, message);
    });
}

// Pre: Takes in a number, message, and photo.
// Post: Send the message to the phone number and takes care of edge case.
exports.mms = function(to, msg, media, response) {
    client.sendMessage({
        to: to,
        from: phoneNumber,
        body: msg,
        mediaUrl: media
    }, function(err, message) {
        if(err) response(err);
        response(messgae.sid);
    });
}

exports.reciever = function(req, res) {
    var twiml = new twilio.TwimlResponse();

    var sender = req.body.From;
    var msg = req.body.Body;
    var convoID = req.cookies ? req.cookies.convoID : undefined;

    console.log('recieved text from ' + sender);
    textRouter.generateResponse(sender, msg, convoID, function(response, cookie) {
        twiml.sms(response);
        if(cookie) res.cookie('convoID', cookie);
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    });
}
