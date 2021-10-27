// connect to database
const mongoose = require("mongoose");

const Test = mongoose.model("Test");

const test = async (req, res) => {
  const msgs = await Test.find({}).lean();
  res.send(msgs[0].msg);
};

module.exports = { test };
