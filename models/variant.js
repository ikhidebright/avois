module.exports = (sequelize, DataTypes) => {
  const Variant = sequelize.define(
    "Variant",
    {
      variantId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Variant.associate = (models) => {
    Variant.hasMany(models.Image, {
      onDelete: "CASCADE",
      foreignKey: "variantId",
      as: "images",
    });

    Variant.belongsTo(models.Product, {
      foreignKey: "productId",
      sourceKey: "variantId",
      as: "product_varieties",
    });
  };

  return Variant;
};
