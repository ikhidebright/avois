module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      productId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
      createdAt: "date_uploaded",
      updatedAt: "date_edited",
    }
  );

  Product.associate = (models) => {
    Product.hasMany(models.Variant, {
      onDelete: "CASCADE",
      foreignKey: "productId",
      as: "product_varieties",
    });
  };

  return Product;
};
