"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Notifications", "redirect_url", {
      type: Sequelize.STRING,        
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Notifications", "redirect_url");
  },
};
