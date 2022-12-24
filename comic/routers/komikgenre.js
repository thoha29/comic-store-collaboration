const { Router } = require("express");
const komikgenreRoute = Router();
const CGController = require("../controllers/CGController");

komikgenreRoute.get("/", CGController.getCG);
komikgenreRoute.post("/create", CGController.create);

module.exports = komikgenreRoute;
