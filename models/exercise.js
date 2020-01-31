module.exports = function(sequelize, DataTypes){
    var Exercise = sequelize.define("Exercise",{
        exercise_name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          duration:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          calories_burned:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          date:{
            type: DataTypes.DATEONLY, 
            allowNull: false,
            validate: {
                len: [1]
              }
        }
    });

    Exercise.associate = function (models){
        models.Exercise.belongsTo(models.User,{
            foreignKey:{
                allowNull: false
            }
        });
    }
    return Exercise;
};