const express = require("express");
const app = express();
const initialRoutes = require("./routes/initial");

app.use(initialRoutes);

app.listen(3000);
