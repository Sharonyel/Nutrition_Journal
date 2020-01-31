module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User Profile",{
        user_name: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate:{
                len: [1,225]
            }
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate:{
                len: [1,225]
            }
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false, 
            validate:{
                len: [1,225]
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false, 
            validate:{
                len: [8,225]
            }
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false, 
            validate:{
                len: [1,3]
            }
        },
        weight:{
            type: DataTypes.INTEGER,
            allowNull: false, 
            validate:{
                len: [2,3]
            }
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: false, 
            validate:{
                len: [1,20]
            }
        },
        weight_goal:{
            type: DataTypes.INTEGER,
            allowNull: false, 
            validate:{
                len: [1,3]
            }
        },
        avatar:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                len: [1,3]
            }
        }
    },{
        classMethods: {
            associate: function(models){
                User.hasMany(models.Food),
                user.hasMany(models.Exercise)
            }
        }
    });

    // User.associate = function (models){
    //     models.User.hasMany(models.food)
    // }


    return User;

}