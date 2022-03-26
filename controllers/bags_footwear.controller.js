const { bagsFootwearModel } = require("../models/product.model");

const bagsFootwear_get = async (req, res) => {
  try {
    let bagsFootwears = await bagsFootwearModel.find();
    res.status(200).json(bagsFootwears);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const bagsFootwear_get_by_id = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await bagsFootwearModel.findById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

module.exports = {
  bagsFootwear_get,
  bagsFootwear_get_by_id,
};
