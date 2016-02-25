var Sequelize = require('sequelize')

var User = new Sequelize('user', {
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