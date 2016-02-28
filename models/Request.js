var Sequelize = require(sequelize)

var User = require('./User');

var Request = new Sequelize('request', {
	id: {
		type: Sequelize.UUID,
		primaryKey: true,
		field: 'userId'
	},
	userId: {
		type: Sequelize.STRING,
		field: 'userId',
		references: {
			model: User,
			key: 'id'
		}
	},
	subject: {
		type: Sequelize.STRING,
		field: 'subject'
	},
	location {
		type: Sequelize.STRING,
		field: 'location'
	},
	dateTime {
		type: Sequelize.DATE,
		field: 'dateTime'
	}
});

module.exports = Request;
