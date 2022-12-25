const express = require("express");
const route = express.Router();

route.get('/', (req, res) => {
    // res.json({
    //     message: 'Hello, world Fruit Store'
    // });

    res.render('index.ejs');
});

comicRoutes = require("./comic");
genreRoutes = require("./genre");
komikgenreRoutes = require("./komikgenre");

route.use("/comics", comicRoutes);
route.use("/genres", genreRoutes);
route.use("/komikgenres", komikgenreRoutes);

module.exports = route;
