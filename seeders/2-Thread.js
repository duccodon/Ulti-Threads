"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et quod inventore 
        nihil asperiores facere pariatur impedit a magni quam! Quidem distinctio porro error ex adipisci repudiandae recusandae aliquid quos.</p>`,
        user_id: 1,

      },
      {
        content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et quod inventore 
        nihil asperiores facere pariatur impedit a magni quam! Quidem distinctio porro error ex adipisci repudiandae recusandae aliquid quos.</p>`,
        user_id: 2,
      },
      {
        content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et quod inventore 
        nihil asperiores facere pariatur impedit a magni quam! Quidem distinctio porro error ex adipisci repudiandae recusandae aliquid quos.</p>`,
        user_id: 3,
      },
      {
        content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et quod inventore 
        nihil asperiores facere pariatur impedit a magni quam! Quidem distinctio porro error ex adipisci repudiandae recusandae aliquid quos.</p>`,
        user_id: 4,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Threads", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Threads", null, {});
  },
};
