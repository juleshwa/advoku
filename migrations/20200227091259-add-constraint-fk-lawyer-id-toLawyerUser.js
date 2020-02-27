'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('LawyerUsers', ['LawyerId'], {
      type: 'foreign key',
      name: 'LawyerId',
      references: { //Required field
        table: 'Lawyers',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('LawyerUsers', 'LawyerId');
  }
};

