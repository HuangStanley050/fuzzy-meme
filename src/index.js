const express = require("express");
const app = express();

app.get("/", (req, res) => {});

app.listen(process.env.PORT || 8000, () =>
  console.log("rendering server running....")
);
