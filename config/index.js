const merge = require("lodash").merge;

const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
};

let envConfig = {};

switch (env) {
  case "development":
    envConfig = require("./dev");
    break;
  case "production":
    envConfig = require("./prod");
    break;
}

module.exports = merge(baseConfig, envConfig);
