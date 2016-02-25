var natural = require('natural');
var states = require('./states');
var twilio = require('./twilio.module');

var roles = {
    ADMIN: 'admin',
    TUTOR: 'tutor',
    USER: 'user'
};

var ADMINS = ['+19095662233'];

var textRouter = {
    roleIdentifier : function(sender, msg) {
        // if the is from one of the admin phone numbers
        if(ADMINS.indexOf(sender) != -1) {
            return roles.ADMIN;
        }
        /** TUTOR identifier
        ** TODO: use redis storage to implement it.
        */

        return roles.USER;
    },
    generateResponse : function(sender, msg, cookie, callback) {
        // use the role identifier
        // user
        console.log(cookie);
        console.log(textRouter.roleIdentifier(sender, msg));
        if(textRouter.roleIdentifier(sender, msg) === roles.USER) {
            textRouter.userTextHandeler(sender, msg);
            if(!cookie) { // first message from the user
                callback('Hello, thanks for your message, we will get in touch asap.', 2);
            } else {
                callback('Hello Again Mr.', cookie);
            }
        }
    },
    userTextHandeler : function(sender, msg) {
        if(!textRouter.canParse()) {
            var text = sender + ': ' + msg;
            twilio.sms(ADMINS[0], text, function(err, message){
                if(err) console.log(err);
            });
        }
    },
    canParse: function() {
        return false;
    }
}

module.exports = textRouter;
