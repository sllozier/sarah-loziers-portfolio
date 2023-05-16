const Sequelize = require("sequelize");
const db = require("./database.js");

const Project = db.define("project", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: "/public/piccies/image-not-found.jpg",
  },
  repo: {
    type: Sequelize.STRING,
  },
  link: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Project;
