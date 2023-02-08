const { genre } = require("../models");

class GenreController {
  static async getGenres(req, res) {
    try {
      let genres = await genre.findAll({
        order: [["id", "asc"]],
      });
      // res.render("./genres/genres_index.ejs", { genres });
      res.status(200).json(genres);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async createGenre(req, res) {
    try {
      const { name } = req.body;
      let result = await genre.create({ name });
      // res.redirect("/genres");
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // static async createPage(req, res) {
  //   res.render("./genres/genres_create.ejs");
  // }
  // static async editPage(req, res) {
  //   try {
  //     const id = +req.params.id;
  //     let genres = await genre.findAll({ where: { id: id } });
  //     res.render("./genres/genres_update.ejs", { genre: genres[0] });
  //   } catch (error) {
  //     res.json(error);
  //   }
  // }

  static async editGenre(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;
      let result = await genre.update(
        {
          name,
        },
        {
          where: { id: id },
        }
      );
      res.status(201).json(result);
      // res.redirect("/genres");
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteGenre(req, res) {
    try {
      const id = +req.params.id;
      let result = await genre.destroy({
        where: { id }
      });

      result === 1 ?
        res.status(200).json({
          message: `id ${id} has been deleted`
        }) : res.status(404).json({
          message: `id ${id} is not found`
        });

    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = GenreController;
