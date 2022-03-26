const { home_kitchenModel } = require("../models/product.model");

const home_kitchen_get = async (req, res) => {
  try {
    let home_kitchen = await home_kitchenModel.find();
    res.status(200).json(home_kitchen);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const home_kitchen_get_by_id = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await home_kitchenModel.findById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

module.exports = {
  home_kitchen_get,
  home_kitchen_get_by_id,
};
