const express = require("express");
const app = express();
const initialRoutes = require("./routes/initial");
const usersRoutes = require("./routes/users");

app.use(usersRoutes);
app.use(initialRoutes);

app.listen(3000);
