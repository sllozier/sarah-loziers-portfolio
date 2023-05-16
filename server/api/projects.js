const router = require("express").Router();
const { Project, Tech, TechUsed } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.findAll({
      include: {
        model: Tech,
        attributes: ["id", "name", "image", "link", "category"],
      },
    });
    res.send(projects);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singleProject = await Project.findByPk(req.params.id, {
      include: {
        model: Tech,
        attributes: ["id", "name", "image", "link", "category"],
      },
    });
    res.send(singleProject);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
