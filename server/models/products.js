'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    product_title: DataTypes.STRING,
    product_description: DataTypes.STRING,
    product_price: DataTypes.NUMERIC,
    product_img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};