const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  // res.json({
  //     message: 'Hello, world Fruit Store'
  // });

  res.render("index.ejs");
});

comicRoutes = require("./comic");
genreRoutes = require("./genre");
komikgenreRoutes = require("./komikgenre");
userRoutes = require("./user");
cartRoutes = require("./cart");
transactionRoutes = require("./transation");

route.use("/comics", comicRoutes);
route.use("/genres", genreRoutes);
route.use("/komikgenres", komikgenreRoutes);
route.use("/users", userRoutes);
route.use("/carts", cartRoutes);
route.use("/transactions", transactionRoutes);

module.exports = route;
