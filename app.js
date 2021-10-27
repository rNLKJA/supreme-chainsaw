// import required dependencies
const express = require("express");

// connect to database
const mongoose = require("mongoose");
require("./models/mongoDB");

// import Routers
const testRouter = require("./routes/testRouter");

// initializing app
const app = express();

// set the homepage access route
app.get("/", (req, res) => {
  res.redirect("https://rin.contact");
});

// define router
app.use("/test", testRouter);

// redirect any invalid access to personal profile homepage
app.all("*", (req, res) => {
  res.redirect("https://rin.contact");
});

app.listen(process.env.PORT || 2529, () => {
  console.log("chuangyu-hscy backend server is listening!!");
});

module.exports = app;
