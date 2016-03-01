var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/test');
var Courses = require('./Courses');
var Tutors = require('./Tutors');

var TutorCourses = sequelize.define('TutorCourses', {
	id: {
		type: Sequelize.UUID,
		field: 'id',
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4
	}, 
	courseID: {
		type: Sequelize.STRING,
		field: 'courseID',
		allowNull: false
	},
	tutorID: {
		type: Sequelize.STRING,
		field: 'tutorID',
		allowNull: false
	},
	instructor: {
		type: Sequelize.STRING,
		field: 'instructor'
	},
	quarter: {
		type: Sequelize.STRING,
		field: 'quarter'
	},
	gpa: {
		type: Sequelize.STRING,
		field: 'gpa'
	}
});

TutorCourses.sync().then(function() {
	return TutorCourses.bulkCreate([{
		courseID: '18988630-df68-11e5-840a-ed688fe9e94a',
		tutorID: '57bd825a-ea46-4a2c-931a-74845156226d',
		instructor: 'teacher 1',
		quarter: 'ss16' ,
		gpa: '4.0'
	},{
		courseID: '18988630-df68-11e5-840a-ed688fe9e94a',
		tutorID: '5f412d25-3a5a-46ae-a15d-7d0f5b76966f',
		instructor: 'teacher 2',
		quarter: 'fw14',
		gpa: '2.8'
	}])
});

module.exports = TutorCourses;