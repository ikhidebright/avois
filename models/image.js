module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      imageId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      variantId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Image.associate = (models) => {
    Image.belongsTo(models.Variant, {
      foreignKey: "variantId",
      sourceKey: "imageId",
      as: "images",
    });
  };

  return Image;
};
