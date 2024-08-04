const jwt = require("jsonwebtoken");
const config = require("../config/config.json");
const environment = config.environment || "default";
const settings = { ...config.default, ...config[environment] };
const {
  authenticationError,
  authorizationError,
} = require("../utils/responseHandlers");

const authMiddleware = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) return authenticationError(res, "Access denied");
  jwt.verify(token, settings.jwtSecret, (err, user) => {
    if (err) return authorizationError(res, "Invalid token");
    req.user = user;
    next();
  });
};

module.exports = authMiddleware;
