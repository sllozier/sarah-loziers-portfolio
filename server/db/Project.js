const Sequelize = require('sequelize');
const db = require('./database.js');

const Project = db.define('project', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    image:{
        type: Sequelize.STRING,
        defaultValue: '/public/piccies/image-not-found.jpg'
    },
    gitHub:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    heroku: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    techUsed: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
    },
});

module.exports = Project;