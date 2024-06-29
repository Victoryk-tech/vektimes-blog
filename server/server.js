require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const blog = require("./models/blogModel");
const errorMiddleware = require("./middleware/errMiddleware");

const blogRoutes = require("./routes/blogRoutes");
const app = express();

//refactor .env
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND;
const MONGO_URL = process.env.MONGO_URL;

//browsers to access this api via cors
const grantAccess = {
  origin: FRONTEND,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorMiddleware);
app.use(cors(grantAccess));
//routes
app.use("/api/blog", blogRoutes);

//connect to mongoose
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("ConnecTeD!");
    app.listen(PORT, () => {
      console.log("Node Api is running on port 3000");
    });
  })
  .catch((err) => console.log("error"));
// routes
app.get("/", (req, res) => {
  res.send("hello node");
});
