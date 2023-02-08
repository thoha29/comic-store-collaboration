const { Transaction } = require("../models");

class TransactionController {
  static async getTransaction(req, res) {
    try {
      const transactions = await Transaction.findAll();
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async create(req, res) {
    try {
    } catch (error) {}
  }
}

module.exports = TransactionController;
