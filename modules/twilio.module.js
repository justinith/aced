// This module will take care of all the interactions with twilio
// only this module will interact with the twilio node_module

// Twilio Credentials
var accountSid = 'AC5ef872f6da5a21de157d80997a64bd33';
var authToken = '4ad97748c64ed6b6af5d9ac9c5e9d1f1';
var phoneNumber = '+16505420375';

var client = require('twilio')(accountSid, authToken);

// Pre: Takes in a number and message.
// Post: Send the message to the phone number and takes care of edge case.
exports.sms = function(to, msg, response) {
    client.messages.create({
        to: to,
        from: phoneNumber,
        body: msg
    }, function(err, message) {
        if(err) response(err);
        response(messgae.sid);
    });
}

// Pre: Takes in a number, message, and photo.
// Post: Send the message to the phone number and takes care of edge case.
exports.mms = function(to, msg, media, response) {
    client.messages.create({
        to: to,
        from: phoneNumber,
        body: msg,
        mediaUrl: media
    }, function(err, message) {
        if(err) response(err);
        response(messgae.sid);
    });
}
