"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comicgenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comicgenre.belongsTo(models.comic, {
        foreignKey: "comicId",
        targetKey: "id",
      });
      comicgenre.belongsTo(models.genre, {
        foreignKey: "genreId",
        targetKey: "id",
      });
    }
  }
  comicgenre.init(
    {
      comicId: DataTypes.INTEGER,
      genreId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "comicgenre",
    }
  );
  return comicgenre;
};
