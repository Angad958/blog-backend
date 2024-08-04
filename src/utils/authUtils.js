const jwt = require("jsonwebtoken");
const loadConfig = require("../utils/loadConfig");
const config = loadConfig();

const generateToken = (userId) => {
  return jwt.sign({ userId }, config.jwtSecret, { expiresIn: "1h" });
};

module.exports = generateToken;
