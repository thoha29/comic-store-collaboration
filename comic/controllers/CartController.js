const { Cart, comic } = require("../models");
const { getUserByToken } = require("../helper/auth");
class CartController {
  static async getCart(req, res) {
    try {
      const user = await getUserByToken(req);
      let result = await Cart.findAll({
        where: { userId: user.id },
        include: [{ model: comic, as: "comics" }],
        order: [["id", "asc"]],
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async create(req, res) {
    try {
      const { comicId, quantity } = req.body;
      const user = await getUserByToken(req);
      let cart = await Cart.create({
        userId: user.id,
        comicId: comicId,
        quantity: quantity,
      });
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async remove(req, res) {
    try {
      const id = +req.params.id;
      const user = await getUserByToken(req);
      const item = await Cart.findOneAndDelete({
        id: id,
        userId: user.id,
      });
      if (item) {
        res
          .status(200)
          .json({ stasus: "success", message: "cart has been deleted" });
      } else {
        res.stasus(400).json({ message: "cart failed to delete" });
      }
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Server error",
        data: error.stack,
      });
    }
  }
  static async updateCart(req, res) {
    try {
      const id = +req.params.id;
      const quantity = req.body;
      const item = await Cart.findByPk(id);
      await item.update({ quantity });
      if (item == 0) {
        res.status(200).json({ message: "quantity has been updated" });
      } else {
        res.stasus(400).json({ message: "error" });
      }
    } catch (error) {
      res.json(error);
    }
  }
}
module.exports = CartController;
