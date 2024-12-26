"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        username: "admin",
        email: "admin@mail.com",
        phonenumber: "0909123456",
        password: "$2b$10$qYLlVG24RFzu2vYqqEzTPejIkLmGS7DOUiImeW4p8RWRT48RthCFW",//test
        bio: "Administrator of the platform",
        profile_picture: "/img/profile/1.jpg",
        isVerified: "true",
      },
      {
        username: "lisleC",
        email: "lcarlick1@furl.net",
        phonenumber: "0288000132",
        password: "$2b$10$qYLlVG24RFzu2vYqqEzTPejIkLmGS7DOUiImeW4p8RWRT48RthCFW",
        bio: "Enthusiastic contributor and blog writer",
        profile_picture: "/img/profile/defaultAvatar.jpeg",
        isVerified: "true",
      },
      {
        username: "frederichO",
        email: "fochiltree2@nytimes.com",
        phonenumber: "0909123456",
        password: "$2b$10$qYLlVG24RFzu2vYqqEzTPejIkLmGS7DOUiImeW4p8RWRT48RthCFW",
        bio: "Tech enthusiast and avid reader",
        profile_picture: "/img/profile/defaultAvatar.jpeg",
        isVerified: "true",
      },
      {
        username: "dorolisaB",
        email: "dblasetti3@wufoo.com",
        phonenumber: "0123123123",
        password: "$2b$10$qYLlVG24RFzu2vYqqEzTPejIkLmGS7DOUiImeW4p8RWRT48RthCFW",
        bio: "Lifelong learner and educator",
        profile_picture: "/img/profile/defaultAvatar.jpeg",
        isVerified: "true",
      },
      {
        username: "rosaleenY",
        email: "ryelland4@de.vu",
        phonenumber: "0403789532",
        password: "$2b$10$qYLlVG24RFzu2vYqqEzTPejIkLmGS7DOUiImeW4p8RWRT48RthCFW",
        bio: "Creative thinker and community organizer",
        profile_picture: "/img/profile/1734501953971-johnCena.jpg",
        isVerified: "true",
      },
      {
        username: "rosdsagda",
        email: "rydsds4@de.vu",
        phonenumber: "0403789532",
        password: "$2b$10$qYLlVG24RFzu2vYqqEzTPejIkLmGS7DOUiImeW4p8RWRT48RthCFW",
        bio: "Creative thinker and community organizer",
        profile_picture: "/img/profile/1734501953971-johnCena.jpg",
        isVerified: "true",
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
