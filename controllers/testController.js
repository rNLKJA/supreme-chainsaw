// connect to mongodb database
const mongoose = require("mongoose");
const Test = mongoose.model("Test");

// connect to MySQL database
const SQL = require("./../models/mysqlDB");

const test = async (req, res) => {
  const msgs = await Test.find({}).lean();
  res.send(msgs[0].msg);
};

const user = async (req, res) => {
  await SQL.query('SELECT * FROM user WHERE _id = "rin"', (error, rows) => {
    if (error) throw error;

    const currentUser = { userName: rows[0].userName, Job: rows[0].Job };

    res.send(
      `Current user is ${currentUser.userName} and job title is ${currentUser.Job}`,
    );
  });
};

module.exports = { test, user };
