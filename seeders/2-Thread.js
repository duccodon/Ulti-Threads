"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et quod inventore nihil asperiores facere pariatur impedit a magni quam!`,
        user_id: 2,
      },
      {
        content: `Quisquam, non corrupti. Ipsa doloribus laudantium, incidunt magni rerum tempore quos repellendus voluptatem numquam amet.`,
        user_id: 2,
      },
      {
        content: `Dolorum delectus facilis cupiditate excepturi consectetur, at aspernatur iusto nihil quam est!`,
        user_id: 2,
      },
      {
        content: `Optio provident omnis molestiae placeat accusamus quos, obcaecati veniam nihil soluta dolor.`,
        user_id: 2,
      },
      {
        content: `Exercitationem officia, modi laboriosam voluptatibus nesciunt molestias odit eaque atque ipsam.`,
        user_id: 2,
      },
      {
        content: `Reiciendis harum quaerat magni adipisci vero aspernatur minima tempora. Necessitatibus, rerum.`,
        user_id: 3,
      },
      {
        content: `Voluptatem officiis odio asperiores, consectetur ad debitis impedit ipsa incidunt distinctio.`,
        user_id: 3,
      },
      {
        content: `Alias quia, saepe dolore. Eligendi eveniet voluptatum deleniti fuga eaque voluptatem.`,
        user_id: 3,
      },
      {
        content: `Deserunt consequuntur illum explicabo quasi quibusdam autem! Quidem fuga nobis est.`,
        user_id: 3,
      },
      {
        content: `Voluptatibus libero minima architecto natus! Itaque, voluptatum culpa! Temporibus laboriosam sed?`,
        user_id: 3,
      },
      {
        content: `Recusandae vero veniam quos facilis voluptate quae, culpa illo assumenda temporibus.`,
        user_id: 4,
      },
      {
        content: `Quod veritatis iste ipsum tenetur corporis ex, nihil dolorem, aspernatur aliquam quia.`,
        user_id: 4,
      },
      {
        content: `Aperiam adipisci maiores saepe autem dolorum fuga eos accusantium quae rem.`,
        user_id: 4,
      },
      {
        content: `Placeat nemo blanditiis, repudiandae sint id magnam molestiae excepturi quisquam optio?`,
        user_id: 4,
      },
      {
        content: `Eos amet fugiat ratione maxime nisi animi debitis ullam nobis cupiditate.`,
        user_id: 4,
      },
      {
        content: `Labore quisquam laborum optio, nesciunt expedita dicta, voluptatem necessitatibus, error asperiores.`,
        user_id: 5,
      },
      {
        content: `Totam reprehenderit eos minima voluptates autem, quos corporis adipisci nobis ex.`,
        user_id: 5,
      },
      {
        content: `Dolor delectus natus asperiores quas, dignissimos iusto quia voluptas exercitationem facilis.`,
        user_id: 5,
      },
      {
        content: `Consequuntur recusandae deserunt, omnis ad distinctio quod alias maiores sunt accusamus?`,
        user_id: 5,
      },
      {
        content: `Facere velit mollitia eum officiis, nesciunt veritatis sunt totam ducimus exercitationem?`,
        user_id: 5,
      },
      {
        content: `Ratione voluptas molestias placeat necessitatibus fugit! Rerum maiores, perspiciatis iure ex?`,
        user_id: 6,
      },
      {
        content: `Tempora commodi numquam quae, at mollitia adipisci suscipit? Quae, recusandae fugiat.`,
        user_id: 6,
      },
      {
        content: `Explicabo accusantium quos voluptate? Dolores deserunt minima architecto consequatur labore molestiae.`,
        user_id: 6,
      },
      {
        content: `Possimus repellendus obcaecati fuga asperiores quia sit eos dolor, reprehenderit dolorem?`,
        user_id: 6,
      },
      {
        content: `Ipsa ullam fugiat, maiores iure cum eveniet voluptates? Nesciunt, necessitatibus laborum.`,
        user_id: 6,
      },
      {
        content: `Velit voluptas suscipit voluptatibus natus eveniet, culpa eos quibusdam architecto quos.`,
        user_id: 7,
      },
      {
        content: `Qui voluptatem pariatur autem. Aspernatur harum earum, vitae ducimus necessitatibus nihil.`,
        user_id: 7,
      },
      {
        content: `Aliquid doloribus quasi voluptas perspiciatis, obcaecati incidunt maiores assumenda dolores sit.`,
        user_id: 7,
      },
      {
        content: `Eaque nobis mollitia voluptatem similique, sint perferendis esse! Expedita, aspernatur dignissimos.`,
        user_id: 7,
      },
      {
        content: `Autem dolore perspiciatis magnam voluptatibus ducimus laborum provident soluta fuga totam.`,
        user_id: 7,
      },
      {
        content: `Ipsa ullam fugiat, maiores iure cum eveniet voluptates? Nesciunt, necessitatibus laborum.`,
        user_id: 6,
      },
      {
        content: `Velit voluptas suscipit voluptatibus natus eveniet, culpa eos quibusdam architecto quos.`,
        user_id: 8,
      },
      {
        content: `Qui voluptatem pariatur autem. Aspernatur harum earum, vitae ducimus necessitatibus nihil.`,
        user_id: 8,
      },
      {
        content: `Aliquid doloribus quasi voluptas perspiciatis, obcaecati incidunt maiores assumenda dolores sit.`,
        user_id: 8,
      },
      {
        content: `Eaque nobis mollitia voluptatem similique, sint perferendis esse! Expedita, aspernatur dignissimos.`,
        user_id: 8,
      },
      {
        content: `Autem dolore perspiciatis magnam voluptatibus ducimus laborum provident soluta fuga totam.`,
        user_id: 8,
      }
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
