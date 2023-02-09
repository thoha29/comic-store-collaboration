const { Transaction } = require("../models");
const { getUserByToken } = require("../helper/auth");
class TransactionController {
  static async create(req, res) {
    const user = await getUserByToken(req);
    try {
      const { total } = req.body;
      const transaction = await Transaction.create({
        userId: user.id,
        isPayed: false,
        total: total,
      });
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = TransactionController;
