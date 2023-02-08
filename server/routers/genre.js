const { Router } = require("express");
const genreRoute = Router();
const GenreController = require("../controllers/GenreController");

genreRoute.get("/", GenreController.getGenres);

genreRoute.post("/create", GenreController.createGenre);

genreRoute.put("/edit/:id", GenreController.editGenre);
genreRoute.delete("/remove/:id", GenreController.deleteGenre);

module.exports = genreRoute;
