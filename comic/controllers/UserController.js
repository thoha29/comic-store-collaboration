const { User } = require("../models");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getUserByToken } = require("../helper/auth");
class UserController {
  static async getUser(req, res) {
    try {
      let users = await User.findAll();
      res.status(200).json({ data: users });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async register(req, res) {
    try {
      const { name, email, password } = req.body;
      let findEmail = await User.findOne({ where: { email } });

      if (!findEmail) {
        let result = await User.create({
          name: name,
          email: email,
          password: password,
          isAdmin: false,
        });
        res.status(200).json(result);
      } else {
        res.status(400).json({
          message: `Email already exist.`,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email, password } });
      if (!user) {
        return res.json({
          status: false,
          data: {},
          error: "User tidak ditemukan",
        });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

      return res.status(200).json({
        status: true,
        data: {
          token,
        },
        error: "",
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async me(req, res) {
    const token = req.headers["authorization"].split(" ")[1];
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      if (user) {
        const dataUser = await User.findByPk(user.id);
        console.log(user.id);
        res.send({
          status: true,
          message: "get user detail success",
          data: {
            name: dataUser.name,
            email: dataUser.email,
          },
        });
      } else {
        res.status(400).send({ status: false, message: "Token not valid" });
      }
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "Server error",
        data: error.stack,
      });
    }
  }
}
module.exports = UserController;
