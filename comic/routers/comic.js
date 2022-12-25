const { Router } = require("express");
const komikRoute = Router();
const ComicController = require("../controllers/ComicController");

komikRoute.get("/", ComicController.getComic);
komikRoute.get("/create", ComicController.createPage);
komikRoute.post("/create", ComicController.createComicWithGenre);
komikRoute.get("/edit/:id", ComicController.editPage);
komikRoute.post("/edit/:id", ComicController.editComic);
komikRoute.get("/remove/:id", ComicController.deleteComic);

module.exports = komikRoute;
