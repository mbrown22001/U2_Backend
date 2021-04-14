'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.region.belongsToMany(models.user, {through: 'pokemon'})
    }
  };
  region.init({
    name: DataTypes.STRING,
    pokemonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'region',
  });
  return region;
};