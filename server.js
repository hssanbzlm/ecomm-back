const express = require("express");
const app = express();
const connect = require("./utils/db").connect;
const config = require("./config");
const itemRouter = require("./ressources/item/item.router");
const cors = require("cors");
app.use(cors());
app.use("/", itemRouter);

module.exports.start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(`I'm listening on http://localhost:${config.port}`);
    });
  } catch (e) {
    console.log(e);
  }
};
