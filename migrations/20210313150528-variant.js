"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() =>
        queryInterface.createTable("Variant", {
          variantId: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal("uuid_generate_v4()"),
          },
          productId: {
            type: Sequelize.UUID,
            allowNull: false,
            onDelete: "CASCADE",
            references: {
              model: "Product",
              key: "productId",
            },
          },
          size: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          color: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          quantity: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          images: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            allowNull: false,
          },
          price: {
            type: Sequelize.STRING,
          },
        })
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Variant");
  },
};
