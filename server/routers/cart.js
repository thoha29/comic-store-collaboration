const { Router } = require("express");
const cartRoute = Router();
const CartController = require("../controllers/CartController");
const { authentication } = require('../middleware/auth')

cartRoute.get("/", CartController.getCart);
cartRoute.post("/create", CartController.create);
cartRoute.put("/edit/:id", CartController.updateCart);
cartRoute.get("remove/:id", CartController.remove);

module.exports = cartRoute;
