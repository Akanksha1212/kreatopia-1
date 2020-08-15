'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model
  class Cart extends Model {}

  Cart.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `User information is not available!`
        },
      }
    },
    ItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Item information is not available!`
        },
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      validate: {
        isNotNegative(quantity) {
          if (quantity < 0) throw new Error('Quantity cannot be negative!')
        }
      }
    },
    status: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
  })

  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.User)
    Cart.belongsTo(models.Item)
  };
  return Cart;
};