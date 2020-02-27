'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lawyer = sequelize.define('Lawyer', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    specialist: DataTypes.STRING,
    profile: DataTypes.STRING,
    pic_link: DataTypes.STRING,
    occupied_status: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {});
  Lawyer.associate = function(models) {
    // associations can be defined here
  };
  return Lawyer;
};