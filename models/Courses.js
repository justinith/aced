var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');

var Courses = sequelize.define('Courses', {
    id: {
        type: Sequelize.UUID,
        field: 'id',
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
    },
    code: {
        type: Sequelize.STRING,
        field: 'code',
        allowNull: true
    }
});

module.exports = Courses;