"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Going to some where?",
          description: "If you really think you can do it",
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "How is it here?",
          description: "You should love it",
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
