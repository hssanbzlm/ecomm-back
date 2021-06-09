const merge = require("lodash").merge;

const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  port: 3000,
};

let envConfig = {};

switch (env) {
  case "development":
    envConfig = require("./dev");
    break;
  case "production":
    envConfig = require("./prod");
    break;
  default:
    envConfig = require("./dev");
}

module.exports = merge(baseConfig, envConfig);
