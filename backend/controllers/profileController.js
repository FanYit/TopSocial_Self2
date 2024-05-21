const axios = require("axios");

const URL = `http://localhost:8000/profile`;
const profileController = async (req, res, next) => {
  console.log("profileController activated");

  const response = await axios.get(`${URL}`);
  res.status(200).json({
    msg: "profile got",
    data: response.data,
  });
};

module.exports = profileController;
