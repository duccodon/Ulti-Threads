"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        username: "admin",
        email: "admin@mail.com",
        password: "AXI3CxWdu",
        bio: "Administrator of the platform",
        profile_picture: "/img/profile/admin.jpg",
      },
      {
        username: "lisleC",
        email: "lcarlick1@furl.net",
        password: "kUzhyPDAB",
        bio: "Enthusiastic contributor and blog writer",
        profile_picture: "/img/profile/lislec.jpg",
      },
      {
        username: "frederichO",
        email: "fochiltree2@nytimes.com",
        password: "x1Q3NnKVg5oB",
        bio: "Tech enthusiast and avid reader",
        profile_picture: "/img/profile/fredericho.jpg",
      },
      {
        username: "dorolisaB",
        email: "dblasetti3@wufoo.com",
        password: "vY3dpY",
        bio: "Lifelong learner and educator",
        profile_picture: "/img/profile/dorolisab.jpg",
      },
      {
        username: "rosaleenY",
        email: "ryelland4@de.vu",
        password: "RNqceiBJWMjI",
        bio: "Creative thinker and community organizer",
        profile_picture: "/img/profile/rosaleeny.jpg",
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Users", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
