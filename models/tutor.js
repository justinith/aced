var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');

var Tutor = sequelize.define('tutor', {
    id: {
        type: Sequelize.UUID,
        field: 'id',
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
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
    takenClasses : {
        type: Sequelize.JSON,
        field: 'takenClasses',
        allowNull : true
    }
});

module.exports = Tutor;