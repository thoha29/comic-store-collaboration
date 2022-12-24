const { comic, genre, comicgenre } = require("../models");
class CGController {
  static async getCG(req, res) {
    try {
      let CG = await comicgenre.findAll({
        attributes: ["comicid", "genreid"],
        include: [comic, genre],
      });
      res.json(CG);
    } catch (error) {
      res.json(error);
    }
  }
  static async create(req, res) {
    try {
      const { comicid, genreid } = req.body;
      let result = await comicgenre.create({
        comicid: +comicid,
        genreid: +genreid,
      });

      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
}
module.exports = CGController;
