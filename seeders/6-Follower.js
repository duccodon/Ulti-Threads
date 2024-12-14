"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        follower_id: 1,
        following_id: 2,
      },
      {
        follower_id: 4,
        following_id: 5,
      },
      {
        follower_id: 5,
        following_id: 1,
      },
      {
        follower_id: 3,
        following_id: 7,
      },
      {
        follower_id: 2,
        following_id: 1,
      },
      {
        follower_id: 1,
        following_id: 4,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Followers", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Followers", null, {});
  },
};