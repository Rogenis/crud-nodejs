'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      this.belongsTo(models.Area)
    }
  };

  Curso.init({

    sigla: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4, 4],
          msg: "the acronym must contain 4 characters!"
        }
      }
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3,30],
          msg:  "The course name must contain between 3 and 30 characters!"
        }
      }
    },
    descricao: DataTypes.STRING,
    areaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};