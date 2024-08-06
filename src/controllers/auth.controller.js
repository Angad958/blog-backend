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
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return clientError(res, "User already exists with this email.");
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({ email, passwordHash });
    await user.save();
    success(res, {
      message: "User signed up successfully.",
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
      return clientError(res, "Invalid email or password.");
    }

    const token = jwt.sign({ userId: user._id }, settings.jwtSecret, {
      expiresIn: "7d",
    });

    res.cookie("idToken", token, {
      secure: true,
      sameSite: "Strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    success(res, {
      message: "User logged in successfully.",
      authorId: user._id,
    });
  } catch (err) {
    serverError(res, err);
  }
};
