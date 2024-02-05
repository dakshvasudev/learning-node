const express = require("express");
const app = express();
const path = require("path");
const initalRoute = require("./routes/initial");
const usersRoute = require("./routes/users");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));

app.use(usersRoute);
app.use(initalRoute);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
