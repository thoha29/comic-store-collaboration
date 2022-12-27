const { comic, genre, comicgenre } = require("../models");

class ComicController {
  static async getComic(req, res) {
    try {
      let comics = await comic.findAll({
        include: [{ model: genre, attributes: ["name"] }],
      });
      // res.json(comics);
      res.render("./comics/comics_index.ejs", { comics });
    } catch (error) {
      res.json(error);
    }
  }

  static async createComic(req, res) {
    try {
      const { name, image, creator, price, stock } = req.body;

      let result = await comic.create({ name, image, creator, price, stock });

      res.redirect("/comics");
    } catch (error) {
      res.json(error);
    }
  }
  static async createComicWithGenre(req, res) {
    try {
      const { name, creator, price, stock, genres } = req.body;
      const image = req.file.path;
      let comics = await comic.create({
        name,
        image,
        creator,
        price,
        stock,
      });
      await comics.addGenres(genres);
      console.log(comics);
      res.redirect("/comics");
    } catch (error) {
      res.json(error);
    }
  }

  static async createPage(req, res) {
    try {
      let genres = await genre.findAll();
      res.render("./comics/comics_create.ejs", { genres });
    } catch (error) {
      res.json(error);
    }
  }

  static async editPage(req, res) {
    try {
      const id = +req.params.id;
      let genres = await genre.findAll();
      let comics = await comic.findAll({
        where: { id },
        include: [{ model: genre, attributes: ["id", "name"] }],
      });
      console.log(comics[0]);
      res.render("./comics/comics_update.ejs", {
        comic: comics[0],
        genres,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async editComic(req, res) {
    try {
      const id = +req.params.id;
      const { name, creator, price, stock, genres } = req.body;

      const updateData = {
        name,
        creator,
        price,
        stock,
      };
      if (req.file) {
        updateData.image = req.file.path;
      }
      console.log("update woyyy", updateData);

      let comics = await comic.findByPk(id);

      await comics.update(updateData);
      console.log("sebelum", comics);
      await comics.setGenres(genres);
      console.log("sesudah", comics);
      res.redirect("/comics");
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deleteComic(req, res) {
    try {
      const id = +req.params.id;
      let result = await comic.destroy({ where: { id } });
      res.redirect("/comics");
      // result === 1
      //     ? res.json({ message: `id ${id} has been deleted` })
      //     : res.json({ message: `id ${id} is not found` });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = ComicController;
