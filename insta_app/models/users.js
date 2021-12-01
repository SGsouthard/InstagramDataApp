'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    website: DataTypes.STRING,
    posts: { 
      type: DataTypes.INTEGER,
      validate: {isInt: { msg: "Posts must be an integer" }}
    },
    followers: DataTypes.INTEGER,
    following: DataTypes.INTEGER,
    email: { 
      type: DataTypes.STRING,
      validate: {isEmail: { msg: "email must be in email@email.com format" }}
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};