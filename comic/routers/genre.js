const { Router } = require("express");
const genreRoute = Router();
const GenreController = require("../controllers/GenreController");

genreRoute.get("/", GenreController.getGenres);
genreRoute.get("/create", GenreController.createPage);
genreRoute.post("/create", GenreController.createGenre);
genreRoute.get("/edit/:id", GenreController.editPage);
genreRoute.post("/edit/:id", GenreController.editGenre);
genreRoute.get("/remove/:id", GenreController.deleteGenre);

module.exports = genreRoute;
