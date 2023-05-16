const router = require("express").Router();
const { Project, Tech, TechUsed } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const tech = await Tech.findAll({
      include: {
        model: Project,
        attributes: ["id", "title", "image", "repo", "link", "description"],
      },
    });
    res.send(tech);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singleTech = await Tech.findByPk(req.params.id, {
      include: {
        model: Project,
        attributes: ["id", "title", "image", "repo", "link", "description"],
      },
    });
    res.send(singleTech);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
