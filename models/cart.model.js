const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({});

const cartModel = mongoose.model("cart", cartSchema, "cart");

module.exports = {cartModel};
