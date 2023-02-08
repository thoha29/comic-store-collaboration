const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { decryptPwd, encryptPwd } = require('../helpers/bcrypt')
const { tokenGenerator, tokenVerifier } = require('../helpers/jsonwebtoken')

class UserController {
  static async getUser(req, res) {
    try {
      let users = await User.findAll({
        order: [["id", "asc"]]
      })

      res.status(200).json(users)

    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async registerAdmin(req, res) {
    try {
      const { name, email, password } = req.body;
      let findEmail = await User.findOne({ where: { email } });

      if (!findEmail) {
        let result = await User.create({
          name: name,
          email: email,
          password: password,
          isAdmin: true,
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

  static async registerCustomer(req, res) {
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

      const emailFound = await User.findOne({
        where: {
          email
        }
      });

      const user = await User.findOne({ where: { email } });
      if (emailFound) {
        if (decryptPwd(password, emailFound.password)) {
          let accessToken = tokenGenerator(emailFound)
          res.status(200).json({ accessToken })

          let verifierToken = tokenVerifier(accessToken)
          console.log(verifierToken)
        } else {
          res.status(403).json({ message: 'Invalid password' })
        }
      } else {
        res.status(404).json({
          message: `User is not found`
        })
      }
      console.log(user)
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  static async update(req, res) {
    try {
      const id = +req.params.id
      const { name, email, password, age, image } = req.body
      let result = await User.update({ name, email, password: String(encryptPwd(password)), age, image }, {
        where: { id }
      })
      res.status(201).json(result)
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id
      let result = await User.destroy({
        where: { id }
      })
      result === 1 ?
        res.status(200).json({
          message: `id ${id} has been deleted`
        }) : res.status(404).json({
          message: `id ${id} is not found`
        });

    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getUserById(req, res) {
    try {
      const id = +req.params.id
      let result = await User.findByPk(id)
      result !== null ?
        res.status(200).json(result)
        : res.status(404).json({
          message: `id ${id} is not found`
        });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = UserController;
