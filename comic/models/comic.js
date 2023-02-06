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
      //association relasi M-M
      comic.belongsToMany(models.genre, {
        through: models.comicgenre,
        foreignKey: "comicId",
      });
      comic.hasMany(models.Cart, { foreignKey: "comicId", as: "comics" });
    }
  }
  comic.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name can not be empty",
          },
        },
      },
      image: DataTypes.STRING,
      creator: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Creator can not be empty",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Price can not be empty",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Stock can not be empty",
          },
        },
      },
      rating: {
        type: DataTypes.DOUBLE,
        validate: {
          notEmpty: {
            message: "rating can not be empty",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            message: "description can not be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "comic",
    }
  );
  return comic;
};
