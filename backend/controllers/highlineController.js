const axios = require("axios");

const URL = `http://localhost:8000/highline`;

const highlineController = async (req, res, next) => {
  console.log("highlineController activated");
  try {
    const response = await axios.get(`${URL}`);
    res.status(200).json({
      msg: "highline got",
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = highlineController;
