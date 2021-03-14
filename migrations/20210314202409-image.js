"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Image", {
      imageId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4,
      },
      variantId: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "Variant",
          key: "variantId",
        },
      },
      location: {
        type: Sequelize.STRING,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Image");
  },
};
