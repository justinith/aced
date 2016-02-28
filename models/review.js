var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/main');

var Reviews = sequelize.define('reviews', {
    id: {
        type: Sequelize.UUID,
        field: 'id',
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    tutorID: {
        type: Sequelize.STRING,
        field: 'tutor_id',
        allowNull: false
    },
    userID: {
        type: Sequelize.STRING,
        field: 'user_id',
        allowNull: false
    },
    sessionID: {
        type: Sequelize.STRING,
        field: 'session_id',
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        field: 'rating',
        allowNull: true
    },
    text: {
        type: Sequelize.STRING,
        field: 'text',
        allowNull: true
    }
});

module.exports = Reviews;