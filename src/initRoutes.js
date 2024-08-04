const logger = require("./utils/logger");
const fs = require("fs");
const path = require("path");

module.exports = async (app) => {
  await logger.info("Adding Routes");

  const routesPath = path.join(__dirname, "routes");
  fs.readdirSync(routesPath).forEach(async (filename) => {
    const routePath = path.join(routesPath, filename);
    if (fs.statSync(routePath).isFile() && filename.endsWith(".js")) {
      const route = require(routePath);
      app.use("/api/" + filename.split(".")[0], route);
    }
  });

  await logger.info("Routes Initialized");
};
