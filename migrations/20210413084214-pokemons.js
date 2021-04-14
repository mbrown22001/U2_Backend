'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [ queryInterface.addColumn(
      'pokemons',
      'regionId',
       Sequelize.INTEGER
     ),
     queryInterface.addColumn(
      'pokemons',
      'userId',
       Sequelize.INTEGER 
      ),
      queryInterface.addColumn(
        'pokemons',
        'img',
         Sequelize.STRING
       )];
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
