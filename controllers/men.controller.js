const menModel = require("../models/men.model");

const men_get = async (req, res) => {
  let id = req.params.id;
  if (id) {
  } else {
    let mens = await menModel.find();
    res.status(200).json(mens);
  }
};

const men_get_by_id = async (req, res) => {
  let id = req.params.id;

  let product = await menModel.findById(id);
  res.status(200).json(product);
};

module.exports = { men_get, men_get_by_id };
