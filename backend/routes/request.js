const express = require("express");
const routerRequest = express.Router();

const requestController = require("../controllers/requestController");
routerRequest.use("/", requestController);

module.exports = routerRequest;
