const mongoose = require("mongoose");
const options = require("../config");

module.exports.connect = (uri = options.dbUri) => {
  return mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
