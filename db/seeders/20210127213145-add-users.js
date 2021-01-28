'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        username: 'alec',
        email: 'alec@alec.com',
        hashedPassword: await bcrypt.hash('password', 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'chris',
        email: 'chris@chris.com',
        hashedPassword: await bcrypt.hash('password', 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'mitchell',
        email: 'mitchell@mitchell.com',
        hashedPassword: await bcrypt.hash('password', 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  },
};
