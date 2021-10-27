// mongodb schema
const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  msg: String,
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
