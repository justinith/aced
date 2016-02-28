var natural = require('natural');
var states = require('./states');
var twilio = require('./twilio.module');

var tokenizer = new natural.WordTokenizer();

var roles = {
    ADMIN: 'admin',
    TUTOR: 'tutor',
    USER: 'user'
};

var adminResponse = {
    REPLY: 'reply',
    REQUEST: 'request'
}

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
        var senderRole = textRouter.roleIdentifier(sender, msg);
        if(senderRole === roles.USER) {
            textRouter.userTextHandeler(sender, msg);
            if(!cookie) { // first message from the user
                callback('Hello, thanks for your message, we will get in touch asap.', 2);
            } else {
                callback('Hello Again Mr.', cookie);
            }
        } else if(senderRole === roles.ADMIN) {
            if(textRouter.adminResponseType(msg) == adminResponse.REPLY && msg.substring(17) != '') {
                twilio.sms(msg.substring(3, 15), msg.substring(17), function(err, message){
                    if(err) console.log(err);
                    callback('Message Delivered to ' + msg.substring(3, 15));
                });
            } else if(textRouter.adminResponseType(msg) == adminResponse.REQUEST) {
                callback(msg);
            }
        } else if(senderRole === roles.TUTOR) {
            console.log(roles.TUTOR);
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
    },
    adminResponseType: function(msg) {
        if(msg.substring(0,2) == 're') {
            return adminResponse.REPLY;
        } else {
            // TODO: make it more detail based on the format
            return adminResponse.REQUEST;
        }
    },
    parseRequest: function(sender, msg) {
        // TODO: make it more detailed, edge cases etc...
        return {
            user: sender,
            course: 'MATH124',
            place: 'Alder Commons',
            time: Date.now()
        }
    }
}

module.exports = textRouter;
