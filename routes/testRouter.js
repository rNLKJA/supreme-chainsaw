// import required dependencies
const express = require("express");

const testRouter = express.Router();

const testController = require("../controllers/testController");

testRouter.get("/", testController.test);

testRouter.get("*", (req, res) => {
  res.status(404).send("Invalid Path");
});

module.exports = testRouter;
