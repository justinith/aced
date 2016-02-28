var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');
var Classes = require('../models/class');
var Tutors = require('../models/tutor');

module.exports = {
	tutorMatch: function(request) {
	/**
		Find all tutors that tutor the same subject

		Of those tutors, select the ones who are available for the current time

		of those, return 5 who are available now
		
	**/
		var subjectId;


		// find classes first
		return Classes.findOne({
			where: {
				display_name: request.subject.toUpperCase()
			}
		}).then(function(id) {
			console.log('The subject id is '+ id.id);
			subjectId = id.id;
			var querySearch = 'SELECT * FROM "tutorClasses" WHERE class_id = ' + "'" + subjectId+"'";
			sequelize.query(querySearch, { type: sequelize.QueryTypes.SELECT}).then(function(tutors) {
				console.log(tutors.length);
				var fiveTutors = [];
				var tutorIndex = 0;
				var length = tutors.length;
				if(length > 5) length = 5;

				for(var i = 0; i < length; i++) {
					console.log(tutors[i].tutor_id);
					Tutors.findOne({
						where: {
							id: tutors[i].tutor_id
						}
					}).then(function(tutorOne) {
						console.log(tutorOne.dataValues);
						console.log('the tutor index is ' + tutorIndex);
						fiveTutors[tutorIndex++] = tutorOne.dataValues.phoneNumber;
						console.log(fiveTutors);
					});
				}
			});

		});
			// search tutors that teach the class
			// Tutors.findAll({
			// 	where: {
			// 		takenClasses: {
			// 			$any: {
			// 				id: subjectId
			// 			}		
			// 		}
			// 	}

			// }).then(function(tutor) {
			// 	console.log(tutor);
			// });
		// add these lines in once the tutor model updated
		// ,
		// 			status: 'active',
		// 			'schedule[0][0]': true
	},
	// pre: takes in date of tutor request
	// post: returns the index of where the date is in 2d array
	dateTimeIndex: function(date) {
		var dateTime = new Date(date);
		dateTime = dateTime.getMinutes() + dateTime.getUTCHours() * 2;
		return dateTime;
	},
	// pre: takes in date of tutor request
	// post: returns the day as a integer 0-6
	dateTimeDay: function(date) {
		var dateDay = new Date(date);
		return dateDay.getDay();
	}
};