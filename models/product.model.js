const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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

const menModel = mongoose.model("men", productSchema, "men");
const womenEthnicModel = mongoose.model(
  "women_ethnic",
  productSchema,
  "women_ethnic"
);
const womenWesternModel = mongoose.model(
  "women_western",
  productSchema,
  "women_western"
);
const kidsModel = mongoose.model("kids", productSchema, "kids");
const bagsFootwearModel = mongoose.model(
  "bags_footwear",
  productSchema,
  "bags_footwear"
);
const beautyProductsModel = mongoose.model("beauty", productSchema, "beauty");
const electronicsModel = mongoose.model(
  "electronics",
  productSchema,
  "electronics"
);
const jewelleryModel = mongoose.model("jewellery", productSchema, "jewellery");

module.exports = {
  productSchema,
  jewelleryModel,
  electronicsModel,
  beautyProductsModel,
  kidsModel,
  bagsFootwearModel,
  womenWesternModel,
  womenEthnicModel,
  menModel,
};
