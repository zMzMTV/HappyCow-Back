require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formidable = require("express-formidable");
const mongoose = require("mongoose");

const app = express();
app.use(formidable());
app.use(cors());

const userRoute = require("./routes/user");
app.use(userRoute);

mongoose.connect("mongodb://localhost/happy-cow", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.all("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "error" });
});

app.listen(3001, () => {
  console.log("Server Started");
});
