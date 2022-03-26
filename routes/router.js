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

const router = express.Router();

router.get("/men", men_get);
router.get("/men/:id", men_get_by_id);
router.get("/jewellery", jewellery_get);
router.get("/jewellery/:id", jewellery_get_by_id);
router.get("/kids", kids_get);
router.get("/kids/:id", kids_get_by_id);

router.get("/women_western", women_western_get);
router.get("/women_western/:id", women_western_get_by_id);
router.get("/women_ethnic", women_ethnic_get);
router.get("/women_ethnic/:id", women_ethnic_get_by_id);

router.get("*", (req, res) => {
  res
    .status(404)
    .send("something went wrong, did not find what you were looking for ");
});
module.exports = router;
