const axios = require("axios");

const URL = `http://localhost:8000/message`;
console.log("messageController activated");
const messageController = async (req, res, next) => {
  const response = await axios.get(`${URL}`);
  res.status(200).json({
    msg: "message got",
    data: response.data,
  });
};

module.exports = messageController;
