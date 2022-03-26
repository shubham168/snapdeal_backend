const express = require("express");
const { men_get } = require("../controllers/men.controller");
const router = express.Router();

router.get("/men", men_get);

module.exports = router;
