var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/test');
var Tutors = require('./Tutors');

var Schedules = sequelize.define('Schedules', {
	id: {
		type: Sequelize.UUID,
		field: 'id',
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4
	}, 
	tutorID: {
		type: Sequelize.STRING,
		field: 'tutorID',
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

Schedules.sync().then(function () {
	// body...
	return Schedules.bulkCreate([{
		tutorID: '57bd825a-ea46-4a2c-931a-74845156226d' ,
		day: 2,
		timeSlots: [true,true,false,false,false,false,false,false,
					false,false,false,false,false,false,false,false,
					true,true,false,false,false,false,false,false,
					true,true,true,true,true,true,true,true,
					false,false,false,false,false,false,false,false,
					false,false,false,false,false,false,true,true]
	}, {
		tutorID: '57bd825a-ea46-4a2c-931a-74845156226d' ,
		day: 3,
		timeSlots: [true,true,false,false,false,false,false,false,
					false,false,false,false,false,false,false,false,
					false,false,false,false,false,false,false,false,
					false,false,true,true,true,true,true,false,
					false,true,true,true,true,false,false,false,
					false,false,false,false,false,false,false,false]
	},{
		tutorID: '5f412d25-3a5a-46ae-a15d-7d0f5b76966f',
		day: 6,
		timeSlots: [false,false,false,false,false,false,false,false,
					false,false,false,false,false,false,false,false,
					false,false,false,false,false,false,false,false,
					false,false,false,false,false,false,false,false,
					false,false,false,false,false,false,false,false,
					true,true,true,true,true,true,false,false]
	}]);
});

module.exports = Schedules;