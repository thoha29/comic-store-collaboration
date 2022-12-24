const { genre } = require("../models");

class GenreController {
  static async getGenres(req, res) {
    try {
      let genres = await genre.findAll();
      res.json(genres);
    } catch (error) {
      res.json(error);
    }
  }
  static async createGenre(req, res) {
    try {
      const { name } = req.body;
      let result = await genre.create({ name });
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
  static async editGenre(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;
      let result = await genre.update({ where: { id } }, { name });
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
  static async deleteGenre(req, res) {
    try {
      const id = +req.params.id;
      let result = await genre.destroy({ where: { id } });
      result === 1
        ? res.json({ message: `id ${id} has been deleted` })
        : res({ message: `id ${id} is not found` });
    } catch (error) {
      res.json(error);
    }
  }
}
module.exports = GenreController;
