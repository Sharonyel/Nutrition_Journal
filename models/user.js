var bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [1, 225]
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 225]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 225]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [8, 225]
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 3]
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
            
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [2, 3]
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    weight_goal: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 3]
      }
    }
    // ,
    // avatar: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //         len: [1, 3]
    //     }
    // }
  }
    // ,{
    //     classMethods: {
    //         associate: function(models){
    //             User.hasMany(models.Food),
    //             User.hasMany(models.Exercise)
    //         }
    //     }
    // }
  );


  User.associate = function (models) {
    User.hasMany(models.Food, {
      onDelete: 'cascade'
    });
    User.hasMany(models.Exercise, {
      onDelete: 'cascade'
    });
  };
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook('beforeCreate', function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });


  return User;

};
