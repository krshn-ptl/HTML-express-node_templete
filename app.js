const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();

const indexRoute = require("./routes/index");

app.use("/", indexRoute);

app.listen(PORT);