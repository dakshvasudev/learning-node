const express = require("express");
const app = express();
const initialRoutes = require("./routes/initial");
const usersRoutes = require("./routes/users");
const path = require("path");

app.use(express.static(path.join(__dirname, "views", "css")));
app.use(usersRoutes);
app.use(initialRoutes);

app.listen(3000);
