"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Leon Marshal",
          content: "White dog",
          imageUrl: "https://images.app.goo.gl/DE1GaeBK7vt99EWM9",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mango Crazy",
          content: "Green fruit",
          imageUrl: "https://images.app.goo.gl/Qsg9ozuJ1MEw3BFSA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
