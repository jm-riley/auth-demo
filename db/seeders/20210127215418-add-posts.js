'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'Posts',
      [
        { content: 'mod 4 is pretty darn cool', userId: 1, createdAt: new Date(), updatedAt: new Date() },
        { content: 'very interesting post', userId: 2, createdAt: new Date(), updatedAt: new Date() },
        { content: 'bunch of industry jargon', userId: 2, createdAt: new Date(), updatedAt: new Date() },
        {
          content: 'something something something, like and subscribe',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Posts', null, {});
  },
};
