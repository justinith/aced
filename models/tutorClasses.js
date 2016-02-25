var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');

var TutorClasses = sequelize.define('tutorClasses', {
    classID: {
        type: Sequelize.STRING,
        field: 'class_id',
        allowNull: false
    },
    tutorID: {
        type: Sequelize.STRING,
        field: 'tutor_id',
        allowNull: false
    },
    instructor: {
        type: Sequelize.STRING,
        field: 'instructor',
        allowNull: true
    },
    qy: {
        type: Sequelize.STRING,
        field: 'quarter_year',
        allowNull: true
    },
    gpa: {
        type: Sequelize.STRING,
        field: 'gpa',
        allowNull: true
    }
});

module.exports = TutorClasses;