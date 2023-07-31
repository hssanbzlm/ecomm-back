const mongoose = require("mongoose");
const options = require("../config");

module.exports.connect = (uri = options.dbUri) => {
  return mongoose.connect(
    uri,
    { dbName: options.dbName },
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
};
