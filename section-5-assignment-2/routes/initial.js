const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.use("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "initial.html"));
});

module.exports = router;
