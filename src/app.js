const express = require("express");
const cors = require("cors");
const connectDB = require("./store/db");
const initRoutes = require("./initRoutes");
const logger = require("./utils/logger");
const rateLimiter = require("./middleware/rate-limiter");
const cookieParser = require("cookie-parser");
const app = express();
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

connectDB();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(rateLimiter);
initRoutes(app);
logger.info("Routes Initialization Completed");

module.exports = app;
