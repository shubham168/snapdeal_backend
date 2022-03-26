const menModel = require("../models/men.model");

const men_get = async (req, res) => {
  let mens = await menModel.find();
  res.status(200).json(mens);
};

module.exports = { men_get };
