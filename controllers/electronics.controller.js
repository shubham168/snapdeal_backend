const { electronicsModel } = require("../models/product.model");

const electronics_get = async (req, res) => {
  try {
    let electronics = await electronicsModel.find();
    res.status(200).json(electronics);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const electronics_get_by_id = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await electronicsModel.findById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

module.exports = {
  electronics_get,
  electronics_get_by_id,
};
