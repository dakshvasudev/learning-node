const express = require("express");
const router = express.Router();
const mainModule = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(mainModule, "views", "initial.html");
});

module.exports = router;
