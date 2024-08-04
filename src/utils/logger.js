const log = console.log;

const loadChalk = async () => {
  const chalk = await import("chalk");
  return chalk.default;
};

const info = async (message) => {
  const chalk = await loadChalk();
  const logMessage = `[${new Date().toISOString()}] : INFO : ${message}`;
  log(chalk.blue(logMessage));
};

const warning = async (message) => {
  const chalk = await loadChalk();
  const logMessage = `[${new Date().toISOString()}] : WARNING : ${message}`;
  log(chalk.yellow(logMessage));
};

const error = async (message) => {
  const chalk = await loadChalk();
  const logMessage = `[${new Date().toISOString()}] : ERROR : ${message}`;
  log(chalk.red(logMessage));
};

module.exports = {
  info,
  warning,
  error,
};
