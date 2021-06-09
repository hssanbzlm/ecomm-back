const mongoose = require("mongoose");
const options = require("../config");

module.exports.connect = (url = options.dbUrl) => {
  return mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
