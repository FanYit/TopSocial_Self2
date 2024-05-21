const axios = require("axios");

const URL = `http://localhost:8000/request`;

const requestController = async (req, res, next) => {
  console.log("requestController activated");

  const response = await axios.get(`${URL}`);
  res.status(200).json({
    msg: "request got",
    data: response.data,
  });
};

module.exports = requestController;
