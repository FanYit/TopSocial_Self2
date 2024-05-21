const express = require("express");
const highline = express.Router();

const highlineController = require("../controllers/highlineController");
highline.get("/", highlineController);

module.exports = highline;
