const express = require("express");
const { men_get, men_get_by_id } = require("../controllers/men.controller");
const router = express.Router();

router.get("/men", men_get);
router.get("/men/:id", men_get_by_id);

router.get("*", (req, res) => {
  res
    .status(404)
    .send("something went wrong, did not find what you were looking for ");
});
module.exports = router;
