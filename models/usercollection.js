'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userCollection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userCollection.init({
    userId: DataTypes.INTEGER,
    regionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userCollection',
  });
  return userCollection;
};