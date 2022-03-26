const { kidsModel } = require("../models/product.model");

const kids_get = async (req, res) => {
  try {
    let kids = await kidsModel.find();
    res.status(200).json(kids);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const kids_get_by_id = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await kidsModel.findById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

module.exports = {
  kids_get,
  kids_get_by_id,
};
