// Install Mongoose
const mongoose = require("mongoose");

// Reset promise
mongoose.Promise = Promise;

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.MONGODB_URI;
} else {
  mongoURI = "mongodb://localhost/customer";
}

// .connect takes two arguments, one is the path to the db
// second argument where you set your settings for the connection
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((feedback) => console.log("connected to the db"))
  .catch((error) => console.log("It has broke, here's why ", error));
module.exports = mongoose;
