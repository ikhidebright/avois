"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() =>
        queryInterface.createTable("Product", {
          productId: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal("uuid_generate_v4()"),
          },
          product_name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          product_description: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          date_uploaded: Sequelize.DATE,
          date_edited: Sequelize.DATE,
        })
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Product");
  },
};
