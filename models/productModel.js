module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    published: {
      type: DataTypes.BOOLEAN,
    },
  });
  return Product;
};
