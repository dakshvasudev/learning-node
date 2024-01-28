const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/add-product", (req, res, next) => {
  res.send(
    "<form action = '/product' method = 'POST'><input type = 'text' name = 'title'></input><button type = 'submit'>ADD PRODUCT</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>This is the / page</h1>");
});

app.listen(3000);
