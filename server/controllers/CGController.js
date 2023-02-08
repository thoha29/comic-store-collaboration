const { comic, genre, comicgenre } = require("../models");
class CGController {
  static async getCG(req, res) {
    try {
      let CG = await comicgenre.findAll({
        attributes: ["id", "comicId", "genreId"],
        include: [comic, genre]
      });

      res.status(200).json(CG);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getAll(req, res) {
    try {
      let id = +req.params.id;
      let comicG = await comicgenre.findOne({
        where: { comicId: id, genreId: id },
      });
      res.status(200).json(comicG);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async create(req, res) {
    try {
      const { comicId, genreId } = req.body;
      let result = await comicgenre.create({
        comicId: +comicId,
        genreId: +genreId,
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
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
        res.status(201).json({ message: `id ${id} telah di perbarui` });
      } else {
        res.status(404).json({ message: `id ${id} gagal di perbarui` });
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }
  static async delete(req, res) {
    try {
      let id = +req.params.id;
      let result = await comicgenre.destroy({ where: { id: id } });

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = CGController;
