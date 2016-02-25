var Sequalize = require('sequalize');
var Tutors = require('../models/tutors');
var Classes = require('../models/class');

module.exports = {
	tutorMatch: function(request) {
	/**
		Find all tutors that tutor the same subject

		Of those tutors, select the ones who are available for the current time

		of those, return 5 who are available now
		
	**/
		var subjectId = Classes.findOne({
			where: {
				display_name: request.subject
			}
		}).then(function(id) {
			console.log('The subject id is'+ id.id);
		});

		console.log('The subject id is'+ subjectId);
		// Tutors.findAll({
		// 	where: {
		// 		takenClasses: {
		// 			$contains: {
		// 				id: subjectId.id
		// 			}
		// 		},
		// 		status: 'active',
		// 		'schedule[0][0]': true
		// 	}

		// });
	},
	dateTimeIndex: function(date) {
		var dateTime = new Date(date);
		dateTime = dateTime.getMinutes() + dateTime.getUTCHours() * 2;
		return dateTime;
	},
	dateTimeDay: function(date) {
		var dateDay = new Date(date);
		return dateDay.getDay();
	}
};