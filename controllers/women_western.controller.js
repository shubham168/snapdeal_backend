const {
  womenWesternModel,
  womenEthnicModel,
} = require("../models/product.model");

const women_western_get = async (req, res) => {
  try {
    let women_western = await womenWesternModel.find();
    res.status(200).json(women_western);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const women_western_get_by_id = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await womenWesternModel.findById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

module.exports = {
  women_western_get,
  women_western_get_by_id,
};
