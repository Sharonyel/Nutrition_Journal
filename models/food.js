module.exports = function (sequelize, DataTypes) {
  var Food = sequelize.define('Food', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    food_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    servings: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }
    }

  });

  Food.associate = function (models) {
    Food.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Food;
};