var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');
var Courses = require('./Courses');
var Tutors = require('./Tutors');

var TutorCourses = sequelize.define('TutorCourses', {
	id: {
		type: Sequelize.STRING,
		field: 'id',
		primaryKey: true
	}, 
	courseID: {
		type: Sequelize.STRING,
		field: 'courseID',
		references: {
			model: Courses,
			key: 'id'
		},
		allowNull: false
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
	instructor: {
		type: Sequelize.STRING,
		field: 'instructor',
	},
	quarter: {
		type: Sequelize.STRING,
		field: 'quarter',
	},
	gpa: {
		type: Sequelize.STRING,
		field: 'gpa'
	}
});

module.exports = TutorCourses;