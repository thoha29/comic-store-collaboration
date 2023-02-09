const { Router } = require("express");
const transactionRoute = Router();
const TransactionController = require("../controllers/TransactionController");

transactionRoute.post("/create", TransactionController.create);
transactionRoute.get("/", TransactionController.get);
module.exports = transactionRoute;
