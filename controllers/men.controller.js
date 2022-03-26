const menModel = require("../models/men.model");

const men_get = async (req, res) => {
  let id = req.params.id;
  if (id) {
    let product = await menModel.find(id);
    res.status(200).json(product);
  } else {
    let mens = await menModel.find();
    res.status(200).json(mens);
  }
};

module.exports = { men_get };
