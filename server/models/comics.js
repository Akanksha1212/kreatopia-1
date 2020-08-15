'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Comics.init({
    UserId: DataTypes.STRING,
    title: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comics',
  });
  return Comics;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comic = sequelize.define('Comic', {
    UserId: DataTypes.STRING,
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Chapter title cannot be empty'
        }
      }
    },
    thumbnail: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  Comic.associate = function(models) {
    // associations can be defined here
    Comic.belongsTo(models.User)
    Comic.hasMany(models.Chapter)
  };
  return Comic;
};