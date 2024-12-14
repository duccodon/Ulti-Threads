"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        username: "admin",
        email: "admin@mail.com",
        phonenumber: "0909123456",
        password: "AXI3CxWdu",
        bio: "Administrator of the platform",
        profile_picture: "/img/profile/default_avatar.jpeg",
      },
      {
        username: "lisleC",
        email: "lcarlick1@furl.net",
        phonenumber: "0288000132",
        password: "kUzhyPDAB",
        bio: "Enthusiastic contributor and blog writer",
        profile_picture: "/img/profile/default_avatar.jpeg",
      },
      {
        username: "frederichO",
        email: "fochiltree2@nytimes.com",
        phonenumber: "0909123456",
        password: "x1Q3NnKVg5oB",
        bio: "Tech enthusiast and avid reader",
        profile_picture: "/img/profile/default_avatar.jpeg",
      },
      {
        username: "dorolisaB",
        email: "dblasetti3@wufoo.com",
        phonenumber: "0123123123",
        password: "vY3dpY",
        bio: "Lifelong learner and educator",
        profile_picture: "/img/profile/default_avatar.jpeg",
      },
      {
        username: "rosaleenY",
        email: "ryelland4@de.vu",
        phonenumber: "0403789532",
        password: "RNqceiBJWMjI",
        bio: "Creative thinker and community organizer",
        profile_picture: "/img/profile/default_avatar.jpeg",
      },
      {
        username: "rosdsagda",
        email: "rydsds4@de.vu",
        phonenumber: "0403789532",
        password: "RNqceiBJWMjI",
        bio: "Creative thinker and community organizer",
        profile_picture: "/img/profile/default_avatar.jpeg",
      },
      {
        username: "dunghq2405",
        email: "dunghq2405@gmail.com",
        phonenumber: "0703425719",
        password: "Dung123456@",
        bio: "Hi there! I'm Dung. I'm a software engineer and a lifelong learner.",
        profile_picture: "/img/profile/default_avatar.jpeg",
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
