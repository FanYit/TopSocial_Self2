const express = require("express");
const messageRouter = express.Router();

const messageController = require("../controllers/messageController");
messageRouter.use("/", messageController);

module.exports = messageRouter;
