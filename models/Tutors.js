var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');

var Tutors = sequelize.define('Tutors', {
    id: {
        type: Sequelize.UUID,
        field: 'id',
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    firstName: {
        type: Sequelize.STRING,
        field: 'firstName',
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        field: 'lastName',
        allowNull: false
    },
    bio: {
        type: Sequelize.STRING,
        field: 'bio',
        allowNull: true
    },
    phone: {
        type: Sequelize.STRING,
        field: 'phone',
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        field: 'email',
        allowNull: false
    }
});

module.exports = Tutors;