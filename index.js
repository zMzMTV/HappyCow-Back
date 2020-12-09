require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formidable = require("express-formidable");
const mongoose = require("mongoose");

const app = express();
app.use(formidable());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const userRoute = require("./routes/user");
app.use(userRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

/*app.all("*", (req, res) => {
  res.status(404).json({ message: "error" });
});*/

app.listen(3000, () => {
  console.log("Server Started");
});
