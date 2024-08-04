const fs = require("fs");
const path = require("path");

const loadConfig = () => {
  const configPath = path.join(__dirname, "../config/config.json");
  const configFile = fs.readFileSync(configPath, "utf-8");
  const config = JSON.parse(configFile);

  const environment = config.environment || "default";
  return { ...config.default, ...config[environment] };
};

module.exports = loadConfig;
