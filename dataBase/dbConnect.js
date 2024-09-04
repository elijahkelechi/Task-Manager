const mongoose = require("mongoose");

const coonectDb = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = coonectDb;
