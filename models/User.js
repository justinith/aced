var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');

var User = sequelize.define('User', {
	id: {
		type: Sequelize.STRING,
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

module.exports = User;