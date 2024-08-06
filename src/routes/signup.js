const express = require("express");
const { signup, login } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/", signup);
module.exports = router;
// change password of config file for sure
