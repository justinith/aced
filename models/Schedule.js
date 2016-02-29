var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');
var Tutors = require('./Tutors');

var Schedule = sequelize.define('Schedule', {
	id: {
		type: Sequelize.STRING,
		field: 'id',
		primaryKey: true
	}, 
	tutorID: {
		type: Sequelize.STRING,
		field: 'tutorID',
		references: {
			model: Tutors,
			key: 'id'
		},
		allowNull: false
	},
	day: {
		type: Sequelize.INTEGER,
		field: 'day',
		primaryKey: true
	},
	timeSlots: {
		type: Sequelize.ARRAY(Sequelize.BOOLEAN),
		field: 'timeSlots'
	}
});

module.exports = Schedule;