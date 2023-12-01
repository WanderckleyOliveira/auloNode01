'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class livros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  livros.init({
    nome: DataTypes.STRING,
    autor: DataTypes.STRING,
    ano: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'livros',
  });
  return livros;
};