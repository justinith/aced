var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');
var User = require('./User');

var Request = sequelize.define('request', {
	id: {
		type: Sequelize.UUID,
		primaryKey: true,
		field: 'userId'
	},
	userId: {
		type: Sequelize.STRING,
		field: 'userId',
	},
	subject: {
		type: Sequelize.STRING,
		field: 'subject'
	},
	location: {
		type: Sequelize.STRING,
		field: 'location'
	},
	dateTime: {
		type: Sequelize.DATE,
		field: 'dateTime'
	}
});

module.exports = Request;
