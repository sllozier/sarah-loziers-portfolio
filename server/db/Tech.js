const Sequelize = require("sequelize");
const db = require("./database.js");

const Tech = db.define("tech", {
  name: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
    defaultValue:
      "https://img.shields.io/static/v1?label=&message=ShieldMissing&color=000000&logo=AngelList&logoColor=FFFFFF",
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: Sequelize.STRING,
  },
});

Tech.afterCreate(async (tech) => {
  if (tech.id === 1) {
    await tech.addProjects(1, { through: { totalTech: 1 } });
    await tech.addProjects(5, { through: { totalTech: 1 } });
    await tech.addProjects(6, { through: { totalTech: 1 } });
  }
  if (tech.id === 2) {
    await tech.addProjects(1, { through: { totalTech: 1 } });
    await tech.addProjects(5, { through: { totalTech: 1 } });
    await tech.addProjects(6, { through: { totalTech: 1 } });
  }
  if (tech.id === 3) {
    await tech.addProjects(5, { through: { totalTech: 1 } });
    await tech.addProjects(6, { through: { totalTech: 1 } });
  }
  if (tech.id === 4) {
    await tech.addProjects(1, { through: { totalTech: 1 } });
    await tech.addProjects(2, { through: { totalTech: 1 } });
    await tech.addProjects(3, { through: { totalTech: 1 } });
    await tech.addProjects(4, { through: { totalTech: 1 } });
  }
  if (tech.id === 5) {
    await tech.addProjects(2, { through: { totalTech: 1 } });
    await tech.addProjects(3, { through: { totalTech: 1 } });
    await tech.addProjects(4, { through: { totalTech: 1 } });
  }
  if (tech.id === 6) {
    await tech.addProjects(2, { through: { totalTech: 1 } });
    await tech.addProjects(3, { through: { totalTech: 1 } });
  }
  if (tech.id === 7) {
    await tech.addProjects(4, { through: { totalTech: 1 } });
  }
  if (tech.id === 8) {
    await tech.addProjects(2, { through: { totalTech: 1 } });
    await tech.addProjects(3, { through: { totalTech: 1 } });
  }
  if (tech.id === 10) {
    await tech.addProjects(1, { through: { totalTech: 1 } });
    await tech.addProjects(2, { through: { totalTech: 1 } });
    await tech.addProjects(3, { through: { totalTech: 1 } });
    await tech.addProjects(4, { through: { totalTech: 1 } });
    await tech.addProjects(5, { through: { totalTech: 1 } });
    await tech.addProjects(6, { through: { totalTech: 1 } });
  }
  if (tech.id === 11) {
    await tech.addProjects(1, { through: { totalTech: 1 } });
    await tech.addProjects(2, { through: { totalTech: 1 } });
    await tech.addProjects(3, { through: { totalTech: 1 } });
    await tech.addProjects(4, { through: { totalTech: 1 } });
  }
  if (tech.id === 12) {
    await tech.addProjects(1, { through: { totalTech: 1 } });
    await tech.addProjects(2, { through: { totalTech: 1 } });
    await tech.addProjects(3, { through: { totalTech: 1 } });
    await tech.addProjects(4, { through: { totalTech: 1 } });
  }
  if (tech.id === 13) {
    await tech.addProjects(1, { through: { totalTech: 1 } });
    await tech.addProjects(2, { through: { totalTech: 1 } });
    await tech.addProjects(3, { through: { totalTech: 1 } });
    await tech.addProjects(4, { through: { totalTech: 1 } });
  }
  if (tech.id === 14) {
    await tech.addProjects(1, { through: { totalTech: 1 } });
    await tech.addProjects(2, { through: { totalTech: 1 } });
    await tech.addProjects(3, { through: { totalTech: 1 } });
    await tech.addProjects(4, { through: { totalTech: 1 } });
  }
});

module.exports = Tech;
