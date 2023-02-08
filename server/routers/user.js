const { Router } = require("express");
const userRoute = Router();
const UserController = require("../controllers/UserController");

userRoute.get('/', UserController.getUser);
userRoute.post('/registerAdmin', UserController.registerAdmin);
userRoute.post('/registerCustomer', UserController.registerCustomer);
userRoute.post('/login', UserController.login);
userRoute.put('/:id', UserController.update);
userRoute.delete('/:id', UserController.delete);
userRoute.get('/:id', UserController.getUserById);

module.exports = userRoute;