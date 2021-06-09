const router = require("express").Router();
const itemController = require("./item.controller");

router.get("/pc", itemController.findAll("pc"));

router.get("/phone", itemController.findAll("phone"));

router.get("/pc/:id", itemController.findById("pc"));

router.get("/phone/:id", itemController.findById("phone"));

module.exports = router;
