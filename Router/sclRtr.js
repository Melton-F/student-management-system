const express = require("express");
const sclController = require("../Controller/schoolController");

const router = express.Router();

router.route("/").get(sclController.getSchool).post(sclController.createSchool);

module.exports = router;
