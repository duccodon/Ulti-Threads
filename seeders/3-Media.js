"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        mediaUrl: "/public/img/post/champion.jpg",
        thread_id: 1,

      },
      {
        mediaUrl: "/public/img/post/champion.jpg",
        thread_id: 2,
      },
      {
        mediaUrl: "/public/img/post/champion.jpg",
        thread_id: 3,
      },
      {
        mediaUrl: "/public/img/post/champion.jpg",
        thread_id: 4,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Medias", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Medias", null, {});
  },
};
