const { beautyProductsModel } = require("../models/product.model");

const beautyProducts_get = async (req, res) => {
  try {
    let beautyProducts = await beautyProductsModel.find();
    res.status(200).json(beautyProducts);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const beautyProducts_get_by_id = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await beautyProductsModel.findById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

module.exports = {
  beautyProducts_get,
  beautyProducts_get_by_id,
};
