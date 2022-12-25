const { comic, genre, comicgenre } = require("../models");

class ComicController {
  static async getComic(req, res) {
    try {
      let comics = await comic.findAll({
        include: [{ model: genre, attributes: ["name"] }],
      });

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
      const { name, image, creator, price, stock, genres } = req.body;

      let comics = await comic.create({
        name,
        image,
        creator,
        price,
        stock,
      });
      await comics.addGenres(genres);
      console.log(comics);
      res.json(comics);
    } catch (error) {
      res.json(error);
    }
  }

  static async createPage(req, res) {
    res.render("./comics/comics_create.ejs");
  }

  static async editPage(req, res) {
    res.render("./comics/comics_update.ejs");
  }

  static async editComic(req, res) {
    try {
      const id = +req.params.id;
      const { name, image, creator, price, stock } = req.body;
      let result = await comic.update(
        {
          name,
          image,
          creator,
          price,
          stock,
        },
        {
          where: { id },
        }
      );
      res.redirect("/comics");
      res.json(result);
    } catch (error) {
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
