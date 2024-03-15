const validateRouter = require("./src/validator/validator.controller");
const express = require("express");
const router = express.Router();

router.post("/validate", validateRouter.validatePortfolio);

module.exports = router;
