const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  limit: 1000, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  message: {
    statusCode: 429,
    error: "Too many requests, please try again after sometime",
  },
});

module.exports = rateLimiter;
