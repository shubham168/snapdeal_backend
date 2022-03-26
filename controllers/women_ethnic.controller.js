const {

    womenEthnicModel,
  } = require("../models/product.model");
  
  const women_ethnic_get = async (req, res) => {
    try {
      let women_ethnic = await womenEthnicModel.find();
      res.status(200).json(women_ethnic);
    } catch (e) {
      res.status(502).send("something went wrong here ::...");
    }
  };
  
  const women_ethnic_get_by_id = async (req, res) => {
    try {
      let id = req.params.id;
      let product = await womenEthnicModel.findById(id);
      res.status(200).json(product);
    } catch (e) {
      res.status(502).send("something went wrong here ::...");
    }
  };
  
  module.exports = {
    women_ethnic_get,
    women_ethnic_get_by_id,
  };
  