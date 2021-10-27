// import required dependencies
const express = require("express");

const testRouter = express.Router();

const testController = require("../controllers/testController");

testRouter.get("/msg", testController.test);

testRouter.get("/user", testController.user);

testRouter.get("*", (req, res) => {
  res.redirect("https://rin.contact");
});

module.exports = testRouter;
