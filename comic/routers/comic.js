const { Router } = require("express");
const komikRoute = Router();
const ComicController = require("../controllers/ComicController");
const multer = require("multer");
const path = require("path");
const upload = multer({ dest: "uploads/" });

komikRoute.get("/", ComicController.getComic);

komikRoute.post(
  "/create",
  upload.single("image"),
  ComicController.createComicWithGenre
);

komikRoute.put("/edit/:id", upload.single("image"), ComicController.editComic);
komikRoute.get("/remove/:id", ComicController.deleteComic);
komikRoute.put("/editstock/:id", ComicController.editComicQty);

module.exports = komikRoute;
