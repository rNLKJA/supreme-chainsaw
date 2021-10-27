const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

// if the app is running on heroku
if (process.env.PORT) {
  // login details retrieved from environment variables
  connectionString =
    "mongodb+srv://<username>:<password>@rin.4orhi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  dbAddress = connectionString
    .replace("<username>", process.env.MONGO_USERNAME)
    .replace("<password>", process.env.MONGO_PASSWORD);
} else {
  // we are running locally
  dbAddress = "mongodb://localhost";
}

// connect to mongodb database
mongoose.connect(dbAddress, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  dbName: "Profile",
});

// connect to the database
const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
  process.exit(1);
});

db.once("open", async () => {
  console.log("Mongo connection started on " + db.host + ":" + db.port);
});

// obtain the database schemas

require("./testSchema");
