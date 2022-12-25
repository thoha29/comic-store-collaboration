"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comic.belongsToMany(models.genre, {
        through: "comicgenre",
        as: "genres",
        foreignKey: "comicId",
      });
    }
  }
  comic.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      creator: DataTypes.STRING,
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "comic",
    }
  );
  return comic;
};
