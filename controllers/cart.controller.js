const { cartModel } = require("../models/cart.model");

const cart_get = async (req, res) => {
  try {
    let cart = await cartModel.find();
    res.status(200).json(cart);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const cart_del = async (req, res) => {
  try {
    let id = req.params.id;
    let cart = await cartModel.deleteOne({ _id: id });
    res.status(200).json(cart);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const cart_get_by_id = async (req, res) => {
  try {
    let id = req.params.id;
    let cart = await cartModel.findById(id);
    res.status(200).json(cart);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const cart_post = async (req, res) => {
  try {
    let addedToCart = await cartModel.create(req.body);
    res.status(200).json(addedToCart);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

module.exports = {
  cart_get,
  cart_get_by_id,
  cart_post,
  cart_del,
};
