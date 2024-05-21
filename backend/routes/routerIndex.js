const express = require("express");
const routerIndex = express.Router();

const routerCards = require("./cards");
const routerHighline = require("./highline");
const routerMessage = require("./message");
const routerProfile = require("./profile");
const routerRequest = require("./request");

routerIndex.use("/cards", routerCards);
routerIndex.use("/highline", routerHighline);
routerIndex.use("/message", routerMessage);
routerIndex.use("/profile", routerProfile);
routerIndex.use("/request", routerRequest);

module.exports = routerIndex;
