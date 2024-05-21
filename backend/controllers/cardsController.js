const axios = require("axios");

const URL = `http://localhost:8000/cards`;

const getCardById = async (req, res, next) => {
  console.log("getCardById activated");

  try {
    const id = req.query.id;
    console.log("id is :", id);

    if (!id) {
      return res.status(400).json({
        msg: "id is required",
      });
    }

    const response = await axios.get(`${URL}?id=${id}`);
    const card = response.data;

    console.log("card.length:", card.length, "card is :", card);

    if (!card.length) {
      return res.status(400).json({
        msg: "id doesn't exist",
      });
    }

    res.status(200).json({
      msg: "getCardById succeed",
      data: card,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCardById = async (req, res, next) => {
  console.log("deleteCardById activated");

  try {
    const idCard = req.params.idCard;
    console.log("idCard is", idCard);

    const response = await axios.delete(`${URL}/${idCard}`);

    res.status(201).json({
      msg: "card deleted",
    });
  } catch (error) {
    next(error);
  }
};

const postCard = async (req, res, next) => {
  console.log("postCard activated");

  try {
    const card = req.body;
    const response = await axios.post(`${URL}`, card);
    const result = response.data;
    res.status(201).json({
      msg: "data sent",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { getCardById, deleteCardById, postCard };
