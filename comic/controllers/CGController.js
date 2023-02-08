const { comic, genre, comicgenre } = require("../models");
class CGController {
  static async getCG(req, res) {
    try {
      let CG = await comicgenre.findAll({
        attributes: ["id", "comicId", "genreId"],
        include: [comic, genre]
      });

      res.json(CG);
    } catch (error) {
      res.json(error);
    }
  }
  static async getAll(req, res) {
    try {
      let id = +req.params.id;
      let comicG = await comicgenre.findOne({
        where: { comicId: id, genreId: id },
      });
      res.json(comicG);
    } catch (error) {
      res.json(error);
    }
  }
  static async create(req, res) {
    try {
      const { comicId, genreId } = req.body;
      let result = await comicgenre.create({
        comicId: +comicId,
        genreId: +genreId,
      });

      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
  static async edit(req, res) {
    try {
      let id = +req.params.id;
      const { comicId, genreId } = req.body;
      let result = await comicgenre.update(
        { comicId: +comicId, genreId: +genreId },
        { where: { id: id } }
      );
      if (result == 1) {
        res.json({ message: `id ${id} telah di perbarui` });
      } else {
        res.json({ message: `id ${id} gagal di perbarui` });
      }
    } catch (error) {
      res.json(error);
    }
  }
  static async delete(req, res) {
    try {
      let id = +req.params.id;
      let result = await comicgenre.destroy({ where: { id: id } });

      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
}
module.exports = CGController;
