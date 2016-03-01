var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/test');

var Users = sequelize.define('User', {
	id: {
		type: Sequelize.UUID,
		field: 'id',
		primaryKey: true
	}, 
	name: {
		type: Sequelize.STRING,
		field: 'name',
	},
	stripeId: {
		type: Sequelize.STRING,
		field: 'stripeId'
	}
});

Users.sync();

module.exports = Users;