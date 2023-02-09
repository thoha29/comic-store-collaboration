const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../models");
exports.getUserByToken = async (req) => {
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (user) {
      const dataUser = await User.findByPk(user.id);

      return dataUser;
    }
  } catch (err) {
    return null;
  }
};
