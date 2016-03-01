var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:nonosqlbutpostgres@localhost:5432/test');

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

Tutors.sync().then(function() {
    return Tutors.bulkCreate([{
        firstName: 'Ayush',
        lastName: 'Saraf',
        bio: 'I am a hacker',
        phone: '+12063932864',
        email: 'ayush29f@gmail.com'
    }, {
        firstName: 'dani',
        lastName: 'Sho',
        bio: 'I am no hacker',
        phone: '+969696964',
        email: 'aydss@gmail.com'  
    }]);
});

module.exports = Tutors;