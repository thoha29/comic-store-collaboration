const { comic, genre, comicgenre } = require("../models");

class ComicController {
  static async getComic(req, res) {
    try {
      let comics = await comic.findAll({
        include: [{ model: genre, attributes: ["name"] }],
        order: [
          ['id', 'asc']
        ]
      });
      // res.json(comics);
      // res.render("./comics/comics_index.ejs", { comics })
      res.status(200).json({ data: comics });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createComicWithGenre(req, res) {
    try {
      const {
        name,
        //image,
        creator,
        price,
        stock,
        genres,
        rating,
        description,
      } = req.body;
      const image = req.file.path;
      let comics = await comic.create({
        name,
        image,
        creator,
        price,
        stock,
        rating,
        description,
      });
      //menghubungkan relasi m-m
      await comics.addGenres(genres);
      console.log(comics);
      // res.redirect("/comics");
      res.status(201).json({ data: comics });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // static async createPage(req, res) {
  //   try {
  //     let genres = await genre.findAll();
  //     res.render("./comics/comics_create.ejs", { genres });
  //   } catch (error) {
  //     res.json(error);
  //   }
  // }

  // static async editPage(req, res) {
  //   try {
  //     const id = +req.params.id;
  //     let genres = await genre.findAll();
  //     let comics = await comic.findAll({
  //       where: { id },
  //       include: [{ model: genre, attributes: ["id", "name"] }],
  //     });
  //     console.log(comics[0]);
  //     res.render("./comics/comics_update.ejs", {
  //       comic: comics[0],
  //       genres,
  //     });
  //   } catch (error) {
  //     res.json(error);
  //   }
  // }

  static async editComic(req, res) {
    try {
      const id = +req.params.id;
      const {
        name,
        image,
        creator,
        price,
        stock,
        genres,
        rating,
        description,
      } = req.body;

      const updateData = {
        name,
        image,
        creator,
        price,
        stock,
        rating,
        description,
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

      // comics === 0
      //   ? res.status(200).json({ status: "Success" })
      //   : res.status(500).json({ status: "failed" });
      // res.redirect("/comics");

      res.status(201).json(comics)
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async deleteComic(req, res) {
    try {
      const id = +req.params.id;
      let result = await comic.destroy({ where: { id } });
      await comicgenre.destroy({ where: { comicId: id } });


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

module.exports = ComicController;
