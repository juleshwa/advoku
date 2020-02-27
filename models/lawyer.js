'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Lawyer extends sequelize.Sequelize.Model { }
  Lawyer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Your email is invalid'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialist: {
      type: DataTypes.STRING
    },
    profile: {
      type: DataTypes.STRING
    },
    pic_link: {
      type: DataTypes.STRING
    },
    occupied_status: {
      type: DataTypes.BOOLEAN
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    hooks: {
      beforeCreate: (Lawyer) => {
        const salt = bcrypt.genSaltSync();
        Lawyer.password = bcrypt.hashSync(Lawyer.password, salt);
      }
    },
    sequelize,
    modelName: 'Lawyer'
  });

  Lawyer.associate = function (models) {
    // associations can be defined here    
    Lawyer.belongsToMany(models.User, { through: 'LawyerUser' })
  };
  return Lawyer;
};