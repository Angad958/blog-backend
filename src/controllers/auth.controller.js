const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("../config/config.json");
const environment = config.environment || "default";
const settings = { ...config.default, ...config[environment] };
const {
  clientError,
  serverError,
  success,
} = require("../utils/responseHandlers");

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({ email, passwordHash });
    await user.save();
    success(res, {
      message: "user signed up successfully.",
    });
  } catch (err) {
    serverError(res, err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return clientError(res, "Invalid credentials");
    }
    const token = jwt.sign({ userId: user._id }, settings.jwtSecret, {
      expiresIn: "1h",
    });
    success(res, {
      message: "user logged in successfully.",
      idToken: token,
    });
  } catch (err) {
    serverError(res, err);
  }
};
