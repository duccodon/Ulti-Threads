"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        receiver_id: 8, 
        transferer_id: 1,
        content: "Follow you",
        is_read: false,
      },
      {
        receiver_id: 8, 
        transferer_id: 1,
        content: "Follow you",
        is_read: false,
      },
      {
        receiver_id: 8, 
        transferer_id: 2,
        content: "Follow you",
        is_read: false,
      },
      {
        receiver_id: 8, 
        transferer_id: 3,
        content: "Follow you",
        is_read: false,
      },
      {
        receiver_id: 8, 
        transferer_id: 4,
        content: "Follow you",
        is_read: false,
      },
      {
        receiver_id: 8, 
        transferer_id: 5,
        content: "Follow you",
        is_read: false,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Notifications", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Notifications", null, {});
  },
};