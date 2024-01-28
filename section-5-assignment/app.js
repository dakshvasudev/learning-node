const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("in the first middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("in the second middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("in the third middleware");
// });

app.use("/users", (req, res, next) => {
  res.send("<h1>This is the users page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>This is the default page</h1>");
});

app.listen(3000);
