const jwt = require("jsonwebtoken");
const { User } = require("../models");
exports.getUserByToken = async (req) => {
  const token = req.headers["authorization"].split(" ")[1];
  const secret = "secretKey";
  try {
    const user = jwt.verify(token, secret);
    if (user) {
      const dataUser = await User.findOne({ id: user.id });
      return dataUser;
    }
  } catch (err) {
    return null;
  }
};
