const express = require("express");
const app = express();

// routes
app.get("/", (req, res) => {
  res.send("hello node");
});
app.listen(3000, () => {
  console.log("Node Api is running on port 3000");
});
