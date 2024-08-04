const app = require("./app");
const config = require("./config/config.json");
const environment = config.environment || "default";
const settings = { ...config.default, ...config[environment] };
const logger = require("./utils/logger");

app.listen(
  settings.port,
  async () => await logger.info(`Server running on port ${settings.port}`)
);
