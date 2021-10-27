// import required dependencies
const express = require("express");

// connect to database
const mongoose = require("mongoose");
require("./models/mongoDB");

// import Routers
const testRouter = require("./routes/testRouter");

// initializing app
const app = express();

app.get("/", (req, res) => {
  res.send("Testing");
});

app.use("/test", testRouter);

app.all("*", (req, res) => {
  res.status(404).send("This page is invalid, please try again!");
});

app.listen(process.env.PORT || 2529, () => {
  console.log("chuangyu-hscy backend server is listening!!");
});

module.exports = app;
