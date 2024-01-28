const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("in the second middleware");
  next();
});

app.use((req, res, next) => {
  console.log("in the third middleware");
});

app.listen(3000);
