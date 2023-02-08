"use strict";
const { encryptPwd } = require('../helpers/bcrypt')
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Cart, { foreignKey: "userId", as: "users" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      hooks: {
        beforeCreate: function (data, options) {
          data.password = encryptPwd(data.password)
        }
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
