var Sequelize = require(sequelize)

var User = require('./User');

var Request = new Sequelize('request', {
	id: {
		type: Sequelize.UUID,
		primaryKey: true
	},
	userId: {
		type: Sequelize.STRING,
		references: {
			model: User,
			key: "id"
		}
	},
	subject: {
		type: Sequelize.STRING
	},
	location {
		type: Sequelize.STRING
	},
	dateTime {
		type: Sequelize.DATE
	},
});

module.exports = Request;
