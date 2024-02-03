const express = require("express");
const router = express.Router();
const mainModule = require("../util/path");

router.get("/users", (req, res, next) => {
  res.sendFile(mainModule, "views", "users.html");
});

module.exports = router;
