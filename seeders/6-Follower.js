"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        mediaUrl: "/img/post/champion.jpg",
        thread_id: 1,

      },
      {
        mediaUrl: "/img/post/champion.jpg",
        thread_id: 2,
      },
      {
        mediaUrl: "/img/post/champion.jpg",
        thread_id: 3,
      },
      {
        mediaUrl: "/img/post/champion.jpg",
        thread_id: 4,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Follower", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Follower", null, {});
  },
};