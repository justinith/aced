var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');

var Class = sequelize.define('class', {
    id: {
        type: Sequelize.UUID,
        field: 'id',
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
    },
    displayName: {
        type: Sequelize.STRING,
        field: 'display_name',
        allowNull: true
    },
    subject: {
        type: Sequelize.STRING,
        field: 'subject',
        allowNull: false
    },
    courseNum: {
        type: Sequelize.STRING,
        field: 'course_num',
        allowNull: false
    }
});

module.exports = Class;