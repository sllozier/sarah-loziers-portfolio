const router = require("express").Router();

router.use("/projects", require("./projects"));
router.use("/tech", require("./tech"));

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
