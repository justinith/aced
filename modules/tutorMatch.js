var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/test');
var Courses = require('../models/Courses');
var Tutors = require('../models/Tutors');
var Schedule = require('../models/Schedules');
var TutorCourses = require('../models/TutorCourses');

module.exports = {
	tutorMatch: function(request) {
	/**
		Find all tutors that tutor the same subject

		Of those tutors, select the ones who are available for the current time

		of those, return 5 who are available now
		
	**/

		var day = this.dateTimeDay(request.dateTime);
		var timeIndex = this.dateTimeIndex(request.dateTime);
		console.log("the day is " + day + " : " + timeIndex);

		var querySearch = 'SELECT "Tutors"."id", "phone", "firstName", "lastName"' +
    						'FROM "Tutors", "Courses", "TutorCourses", "Schedules"' +
    						'WHERE "Tutors"."id"::"varchar" = "TutorCourses"."tutorID"' +
    						'AND "Courses"."id"::"varchar" = "TutorCourses"."courseID"' +
    						'AND "Courses"."code" = ' + "'" + request.subject + "' " +
    						'AND "Schedules"."day" = ' + day + " " +
    						'AND "Schedules"."timeSlots"[' + timeIndex + "] = true " +
    						'AND "Schedules"."timeSlots"[' + (timeIndex +1) +"] = true " +
    						'ORDER BY "TutorCourses"."gpa" DESC ' +
    						'LIMIT 5;'
		sequelize.query(querySearch, { type: sequelize.QueryTypes.SELECT}).then(function(tutors) {
			console.log(tutors);
			return tutors;
		});
	},
	// pre: takes in date of tutor request
	// post: returns the index of where the date is in 2d array
	dateTimeIndex: function(date) {
		var dateTime = new Date(date);
		dateTime = Math.round(dateTime.getUTCHours() * 2 + dateTime.getMinutes() / 30);
		return dateTime;
	},
	// pre: takes in date of tutor request
	// post: returns the day as a integer 0-6
	dateTimeDay: function(date) {
		var dateDay = new Date(date);
		return dateDay.getDay();
	}
};