var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');

var User = sequelize.define('tutor', {
    id: {
        type: Sequelize.STRING,
        field: 'id',
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name',
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        field: 'last_name',
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        field: 'description',
        allowNull: true
    },
    phoneNumber: {
        type: Sequelize.STRING,
        field: 'phone_number',
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        field: 'email',
        allowNull: false
    },
    schoolID : {
        type: Sequelize.STRING,
        field: 'school_id',
        references : {
            model : school,
            key : 'id'
        },
        allowNull : true
    },
    classes : {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        field: 'classes',
        allowNull : true
    },
});

module.exports = User;