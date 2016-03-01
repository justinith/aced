var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/test');

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

Courses.sync().then(function() {
    return Courses.bulkCreate([{
        code: 'Math 125'
    },{
        code: 'CSE 142'
    }]);
});

module.exports = Courses;