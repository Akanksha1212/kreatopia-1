'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chapter = sequelize.define('Chapter', {
    UserId: DataTypes.INTEGER,
    ComicId: DataTypes.INTEGER,
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Chapter title cannot be empty'
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please upload an image'
        }
      }
    }
  }, {});
  Chapter.associate = function(models) {
    // associations can be defined here
    Chapter.belongsTo(models.Comic)
    Chapter.belongsTo(models.User)
  };
  return Chapter;
};