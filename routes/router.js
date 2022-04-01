const express = require("express");
const { men_get, men_get_by_id } = require("../controllers/men.controller");
const { kids_get, kids_get_by_id } = require("../controllers/kids.controller");
const {
  jewellery_get,
  jewellery_get_by_id,
} = require("../controllers/jewellery.controller");
const {
  women_western_get,
  women_western_get_by_id,
} = require("../controllers/women_western.controller");

const {
  women_ethnic_get,
  women_ethnic_get_by_id,
} = require("../controllers/women_ethnic.controller");
const {
  bagsFootwear_get,
  bagsFootwear_get_by_id,
} = require("../controllers/bags_footwear.controller");
const {
  beautyProducts_get,
  beautyProducts_get_by_id,
} = require("../controllers/beauty.controller");
const {
  electronics_get,
  electronics_get_by_id,
} = require("../controllers/electronics.controller");
const {
  home_kitchen_get,
  home_kitchen_get_by_id,
} = require("../controllers/home_kitchen.controller");
const {
  cart_get,
  cart_get_by_id,
  cart_post,
  cart_del,
} = require("../controllers/cart.controller");
const { user_get, user_post } = require("../controllers/user.controller");

const router = express.Router();

router.get("/men", men_get);
router.get("/men/:id", men_get_by_id);
router.get("/jewellery", jewellery_get);
router.get("/jewellery/:id", jewellery_get_by_id);
router.get("/bagsFootwear", bagsFootwear_get);
router.get("/bagsFootwear/:id", bagsFootwear_get_by_id);
router.get("/beautyProducts", beautyProducts_get);
router.get("/beautyProducts/:id", beautyProducts_get_by_id);
router.get("/electronics", electronics_get);
router.get("/electronics/:id", electronics_get_by_id);
router.get("/home_kitchen", home_kitchen_get);
router.get("/home_kitchen/:id", home_kitchen_get_by_id);
router.get("/kids", kids_get);
router.get("/kids/:id", kids_get_by_id);
router.get("/women_western", women_western_get);
router.get("/women_western/:id", women_western_get_by_id);
router.get("/women_ethnic", women_ethnic_get);
router.get("/women_ethnic/:id", women_ethnic_get_by_id);
router.get("/cart", cart_get);
router.post("/cart", cart_post);
router.get("/cart/:id", cart_get_by_id);
router.delete("/cart/:id", cart_del);

router.get("/user", user_get);
router.post("/user", user_post);

router.get("*", (req, res) => {
  res
    .status(404)
    .send("something went wrong, did not find what you were looking for ");
});
module.exports = router;
