"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        user_id: 1,
        thread_id: 1,
      },
      {
        user_id: 4,
        thread_id: 1,
      },
      {
        user_id: 2,
        thread_id: 2,
      },
      {
        user_id: 3,
        thread_id: 3,
      },
      {
        user_id: 4,
        thread_id: 4,
      },
      {
        user_id: 5,
        thread_id: 1,
      },
      {
        user_id: 3,
        thread_id: 2,
      },
      {
        user_id: 1,
        thread_id: 3,
      },
      {
        user_id: 2,
        thread_id: 4,
      },
      {
        user_id: 5,
        thread_id: 5,
      }
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Reposts", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reposts", null, {});
  },
};