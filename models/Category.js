const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// below was in original starter code, but why? Is it necessary?
//const { truncate } = require('./Product.js'); 

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
  
);

module.exports = Category;
