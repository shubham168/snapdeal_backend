const { menModel } = require("../models/product.model");

const men_get = async (req, res) => {
  try {
    let mens = await menModel.find();
    res.status(200).json(mens);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const men_get_by_id = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await menModel.findById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

module.exports = {
  men_get,
  men_get_by_id,
};
