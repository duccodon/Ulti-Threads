"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        receiver_id: 3, 
        transferer_id: 1,
        content: "Follow you",
        is_read: false,
        redirect_url: "/Profile/1",
      },
      {
        receiver_id: 2, 
        transferer_id: 1,
        content: "Follow you",
        is_read: false,
        redirect_url: "/Profile/1",
      },
      {
        receiver_id: 6, 
        transferer_id: 2,
        content: "Follow you",
        is_read: false,
        redirect_url: "/Profile/2",
      },
      {
        receiver_id: 1, 
        transferer_id: 3,
        content: "Follow you",
        is_read: false,
        redirect_url: "/Profile/3",
      },
      {
        receiver_id: 2, 
        transferer_id: 4,
        content: "Follow you",
        is_read: false,
        redirect_url: "/Profile/4",
      },
      {
        receiver_id: 4, 
        transferer_id: 5,
        content: "Follow you",
        is_read: false,
        redirect_url: "/Profile/5",
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