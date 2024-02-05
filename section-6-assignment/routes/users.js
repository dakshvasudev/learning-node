const express = require("express");
const router = express.Router();

router.use("/users", (req, res, next) => {
  res.render("users");
});

module.exports = router;
