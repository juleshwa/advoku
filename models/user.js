'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model { }
  User.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },  
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      unique: true
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        len: [6, 8]
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Your email is invalid'
        }
      }
    },
    phone: {
      type : DataTypes.STRING,
      allowNull : false
    },
    role: {
      type : DataTypes.STRING,
      allowNull : false
    }
  }, {
    sequelize,
    modelName : 'User',

    hooks: {
      beforeDestroy(user, options) {
        return sequelize.models.User.update({
            UserId: null
          }, {
            where: {
              UserId: this.id
            }
          })
        }
      }
  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Lawyer);
  };
  return User;
};