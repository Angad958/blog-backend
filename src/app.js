const express = require("express");
const cors = require("cors");
const connectDB = require("./store/db");
const initRoutes = require("./initRoutes");
const logger = require("./utils/logger");
const rateLimiter = require("./middleware/rate-limiter");
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);
initRoutes(app);
logger.info("Routes Initialization Completed");

module.exports = app;
