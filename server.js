const express = require("express");
const app = express();

app.use((req, res) => {
  res.send("Hello! from docker");
});

const port = process.env.PORT || 3000;
app.listen(port);
