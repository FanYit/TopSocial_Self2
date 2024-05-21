const express = require("express");
const routerCards = express.Router();

const {
  getCardById,
  deleteCardById,
  postCard,
} = require("../controllers/cardsController");

routerCards.get("/", getCardById);
routerCards.delete("/:idCard", deleteCardById);
routerCards.post("/", postCard);

module.exports = routerCards;
