'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model
  class Item extends Model {}

  Item.init({
    UserId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Do not leave the item name empty!`
        },
      }
    },
    thumbnail: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        isNotNegative(price) {
          if (price < 0) throw new Error('Price cannot be negative!')
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        isNotNegative(stock) {
          if (stock < 0) throw new Error('Stock number cannot be negative!')
        }
      }
    },
  }, {
    sequelize,
  })

  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.User)
    Item.hasMany(models.Cart)
  };
  return Item;
};