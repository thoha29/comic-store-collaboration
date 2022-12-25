const { Router } = require("express");
const komikgenreRoute = Router();
const CGController = require("../controllers/CGController");

komikgenreRoute.get("/", CGController.getCG);
komikgenreRoute.get("/get/:id", CGController.getAll);
komikgenreRoute.post("/create", CGController.create);
komikgenreRoute.post("/edit/:id", CGController.edit);
komikgenreRoute.get("/edit/:id", CGController.edit);
komikgenreRoute.get("/delete/:id", CGController.delete);

module.exports = komikgenreRoute;
