const { jewelleryModel } = require("../models/product.model");

const jewellery_get = async (req, res) => {
  try {
    let jewellerys = await jewelleryModel.find();
    res.status(200).json(jewellerys);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const jewellery_get_by_id = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await jewelleryModel.findById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

module.exports = {
  jewellery_get,
  jewellery_get_by_id,
};
