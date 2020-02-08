module.exports = function (sequelize, DataTypes) {
  var Exercise = sequelize.define('Exercise', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1-255]
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1-255]
      }
    },
    calories_burned: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1-255]
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1-255]
      }
    }
  });



  Exercise.associate = function (models) {
    Exercise.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Exercise;
};