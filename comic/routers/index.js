const express = require("express");
const route = express.Router();

komikRoutes = require("./komik");
genreRoutes = require("./genre");
komikgenreRoutes = require("./komikgenre");

route.use("/komiks", komikRoutes);
route.use("/genres", genreRoutes);
route.use("/komikgenres", komikgenreRoutes);

module.exports = route;
