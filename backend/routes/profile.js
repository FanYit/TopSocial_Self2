const express = require("express");

const routerProfile = express.Router();

const profileController = require("../controllers/profileController");
routerProfile.get("/", profileController);

module.exports = routerProfile;
