var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/test');
var Users = require('./Users');

var Requests = sequelize.define('Requests', {
	id: {
		type: Sequelize.UUID,
		primaryKey: true,
		field: 'id',
		defaultValue: Sequelize.UUIDV4
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
	},
});

Requests.sync();

module.exports = Requests;
