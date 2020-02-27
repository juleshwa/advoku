'use strict';
module.exports = (sequelize, DataTypes) => {
  const LawyerUser = sequelize.define('LawyerUser', {
    LawyerId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    case_type: DataTypes.STRING,
    case_progress: DataTypes.STRING,
    case_completion: DataTypes.BOOLEAN
  }, {});
  LawyerUser.associate = function(models) {
    // associations can be defined here
  };
  return LawyerUser;
};