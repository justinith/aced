var natural = require('natural');
var states = require('./states');

var roles = {
    ADMIN: 'admin',
    TUTOR: 'tutor',
    USER: 'user'
};

var ADMINS = ['+12063932864'];

exports.roleIdentifier = function(from, msg) {
    // if the is from one of the admin phone numbers
    if(ADMINS.indexOf(from) != -1) {
        return roles.ADMIN;
    }
    /** TUTOR identifier
    ** TODO: use redis storage to implement it.
    */

    return roles.USER;
}

exports.generateResponse = function(from, msg, callback) {
    var response = 'Hello World';
    callback(response, 1);
}

exports.firstMessageResponse = function(text) {

}
