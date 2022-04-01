const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  details: {
    Fabric: {
      type: String,
    },
    Pattern: {
      type: String,
    },
    Multipack: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  original_price: {
    type: Number,
  },
  discounted_price: {
    type: Number,
  },
  sizes: {
    type: [String],
  },
  images: {
    type: [String],
  },
  rating: {
    type: Number,
  },
  seller_id: {
    type: Number,
  },
});

const cartModel = mongoose.model("cart", cartSchema, "cart");

module.exports = { cartModel };
