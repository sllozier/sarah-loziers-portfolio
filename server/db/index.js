const db = require("./database");
const Project = require("./Project");
const Tech = require("./Tech");
const TechUsed = require("./TechUsed");

Project.belongsToMany(Tech, { through: TechUsed });
Tech.belongsToMany(Project, { through: TechUsed });

module.exports = {
  db,
  Project,
  Tech,
  TechUsed,
};
