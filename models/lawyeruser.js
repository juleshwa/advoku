'use strict';
module.exports = (sequelize, DataTypes) => {
  class LawyerUser extends sequelize.Sequelize.Model { }
  LawyerUser.init({
    LawyerId: {
      type: DataTypes.INTEGER
    },
    UserId: {
      type: DataTypes.INTEGER
    },
    case_type: {
      type: DataTypes.STRING
    },
    case_progress: {
      type: DataTypes.INTEGER
    },
    case_completion: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'LawyerUser'
  });
  LawyerUser.associate = function (models) {
    // associations can be defined here
  };
  return LawyerUser;
};