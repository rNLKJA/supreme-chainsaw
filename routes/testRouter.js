// import required dependencies
const express = require("express");

const testRouter = express.Router();

const testController = require("../controllers/testController");

testRouter.get("/", testController.test);

testRouter.get("*", (req, res) => {
  res.redirect("https://rin.contact");
});

module.exports = testRouter;
