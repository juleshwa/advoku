'use strict';
module.exports = (sequelize, DataTypes) => {
  class Lawyer extends sequelize.Sequelize.Model { }
  Lawyer.init({
    name: {
      type : DataTypes.STRING
    },
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [6, 8]
      }
    },
    email: {
      type : DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Your email is invalid'
        }
      }
    },
    phone: {
      type : DataTypes.STRING
    },
    specialist: {
      type : DataTypes.STRING  
    },
    profile: {
      type : DataTypes.STRING
    },
    pic_link: {
      type : DataTypes.STRING
    },
    occupied_status: {
      type : DataTypes.BOOLEAN
    },
    role: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName : 'Lawyer',

    hooks: {
      beforeDestroy(lawyer, options) {
        return sequelize.models.Lawyer.update({
            LawyerId: null
          }, {
            where: {
              LawyerId: this.id
            }
          })
        }
      }
  });

  Lawyer.associate = function(models) {
    // associations can be defined here
    Lawyer.belongsTo(models.User);
    Lawyer.belongsToMany(models.User, {through: "LawyerUser"})
  };
  return Lawyer;
};