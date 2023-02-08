const { Router } = require("express");
const komikRoute = Router();
const ComicController = require("../controllers/ComicController");
//const multer = require("multer");
const path = require("path");
//const upload = multer({ dest: "uploads/" });
const { multerUpload } = require('../middleware/multer')

komikRoute.get("/", ComicController.getComic);

komikRoute.post(
  "/create",
  multerUpload.single("image"),
  ComicController.createComicWithGenre
);

komikRoute.post("/edit/:id", multerUpload.single("image"), ComicController.editComic);
komikRoute.delete("/remove/:id", ComicController.deleteComic);

module.exports = komikRoute;
