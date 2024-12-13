"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            user_id: 2,
            thread_id: 1,
 
          },
          {
            content: "Pellentesque habitant morbi tristique senectus et netus.",
            user_id: 4,
            thread_id: 1,
 
          },
          {
            content: "Mauris in aliquam sem fringilla ut morbi tincidunt.",
            user_id: 5,
            thread_id: 2,
 
          },
          {
            content: "Ultrices vitae auctor eu augue ut lectus arcu bibendum.",
            user_id: 6,
            thread_id: 2,
 
          },
          {
            content: "Sit amet cursus sit amet dictum sit amet justo donec.",
            user_id: 3,
            thread_id: 3,
 
          },
          {
            content: "In hac habitasse platea dictumst vestibulum rhoncus est pellentesque.",
            user_id: 2,
            thread_id: 4,
 
          },
          {
            content: "Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.",
            user_id: 7,
            thread_id: 5,
 
          },
          {
            content: "Vitae ultricies leo integer malesuada nunc vel risus commodo viverra.",
            user_id: 3,
            thread_id: 5,
 
          },
          {
            content: "Quisque egestas diam in arcu cursus euismod. Nunc mattis enim ut.",
            user_id: 5,
            thread_id: 6,
 
          },
          {
            content: "Ut venenatis tellus in metus vulputate eu scelerisque felis.",
            user_id: 7,
            thread_id: 7,
 
          },
          {
            content: "Nunc consequat interdum varius sit amet. Dui id ornare arcu odio ut sem.",
            user_id: 4,
            thread_id: 8,
 
          },

          {
            content: "Amet justo donec enim diam vulputate ut tristique et egestas.",
            user_id: 6,
            thread_id: 9,
 
          },
          {
            content: "At elementum eu facilisis sed. Massa tincidunt dui ut ornare lectus sit.",
            user_id: 5,
            thread_id: 9,
 
          },
          {
            content: "Sed tempus urna et pharetra pharetra massa massa ultricies mi.",
            user_id: 3,
            thread_id: 10,
 
          },
          {
            content: "Nisl purus in mollis nunc sed id semper risus in. Mi in nulla posuere sollicitudin.",
            user_id: 7,
            thread_id: 11,
 
          },
          {
            content: "Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Nunc mattis enim ut.",
            user_id: 2,
            thread_id: 12,
 
          },
          {
            content: "Ut tristique et egestas quis. Quis risus sed vulputate odio ut enim blandit.",
            user_id: 5,
            thread_id: 13,
 
          },
          {
            content: "Pharetra sit amet aliquam id diam maecenas ultricies mi. Et netus et malesuada fames.",
            user_id: 6,
            thread_id: 13,
 
          },
          {
            content: "Ut tristique et egestas quis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.",
            user_id: 4,
            thread_id: 14,
 
          },
          {
            content: "Mattis vulputate enim nulla aliquet porttitor lacus luctus. Vulputate ut pharetra sit amet.",
            user_id: 2,
            thread_id: 15,
 
          },
          {
            content: "Non quam lacus suspendisse faucibus. Massa enim nec dui nunc mattis enim ut.",
            user_id: 3,
            thread_id: 16,
 
          },
          {
            content: "Pellentesque dignissim enim sit amet venenatis urna cursus eget. Sit amet cursus sit amet.",
            user_id: 7,
            thread_id: 17,
 
          },
          {
            content: "Mauris sit amet massa vitae tortor. Sit amet porttitor eget dolor morbi non arcu.",
            user_id: 6,
            thread_id: 18,
 
          },
          {
            content: "Eget est lorem ipsum dolor sit amet. Enim nec dui nunc mattis enim ut.",
            user_id: 5,
            thread_id: 19,
 
          },
          {
            content: "In pellentesque massa placerat duis ultricies lacus sed. Cursus sit amet dictum sit amet.",
            user_id: 4,
            thread_id: 20,
 
          },
          {
            content: "Sed adipiscing diam donec adipiscing tristique. Nullam eget felis eget nunc lobortis.",
            user_id: 3,
            thread_id: 21,
 
          },
          {
            content: "Dui id ornare arcu odio ut sem. Eget est lorem ipsum dolor sit amet.",
            user_id: 6,
            thread_id: 22,
 
          },
          {
            content: "Orci a scelerisque purus semper. Euismod elementum nisi quis eleifend quam adipiscing.",
            user_id: 2,
            thread_id: 23,
 
          },
          {
            content: "Enim neque volutpat ac tincidunt vitae semper quis lectus. Scelerisque felis imperdiet proin.",
            user_id: 4,
            thread_id: 24,
 
          },
          {
            content: "Tortor at auctor urna nunc id cursus metus. Nisl purus in mollis nunc sed.",
            user_id: 5,
            thread_id: 25,
 
          },
          {
            content: "Morbi tristique senectus et netus et malesuada. Egestas integer eget aliquet.",
            user_id: 7,
            thread_id: 26,
 
          },
          {
            content: "Ultrices dui sapien eget mi proin sed. Ipsum dolor sit amet consectetur adipiscing elit.",
            user_id: 3,
            thread_id: 27,
 
          },
          {
            content: "Quis risus sed vulputate odio ut enim blandit volutpat. Purus ut faucibus pulvinar elementum.",
            user_id: 2,
            thread_id: 28,
 
          },

          {
            content: "Sit amet est placerat in egestas erat imperdiet. Elementum facilisis leo vel fringilla.",
            user_id: 6,
            thread_id: 29,
 
          },
          {
            content: "In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
            user_id: 7,
            thread_id: 30,
 
          },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Comments", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};