const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  original_price: { type: Number, required: true },
  discounted_price: { type: Number, required: true },
  sizes: [{ type: String }],
  images: [{ type: String, required: true }],
  details: {
    Fabric: { type: String, required: true },
    Pattern: { type: String, required: true },
    Multipack: { type: String, required: true },
    description: { type: String, required: true },
  },
  rating: { type: Number, required: true },
  seller_id: { type: Number, required: true },
});

const menModel = mongoose.model("men", menSchema, "men");

module.exports = menModel;
