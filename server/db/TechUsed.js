const Sequelize = require("sequelize");
const db = require("./database");
const Tech = require("./Tech");
const Project = require("./Project");

const TechUsed = db.define("techused", {
  techId: {
    type: Sequelize.INTEGER,
    references: {
      model: Tech,
      key: "id",
    },
  },
  projectId: {
    type: Sequelize.INTEGER,
    references: {
      model: Project,
      key: "id",
    },
  },
  totalTech: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
});

module.exports = TechUsed;
