const express = require("express");
const app = express();
const initialRoutes = require("./routes/initial");
const userRoutes = require("./routes/users");

app.get(initialRoutes);
app.get(userRoutes);

app.listen(3000);
