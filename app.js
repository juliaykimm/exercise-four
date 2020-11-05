const express = require("express");

const app = express();

const port = process.env.POST || 4000;

const indexRoute = require("./routes/index.js");

app.listen(port, () =>
  console.log("Exercise Four is running at local host:${port}")
);
