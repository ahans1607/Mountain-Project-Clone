'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        firstName: "Demo",
        lastName: "User",
        username: 'Demo-User',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        firstName: "Demo",
        lastName: "User1",
        username: 'DemoUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        firstName: "Demo",
        lastName: "User2",
        username: 'DemoUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-User', 'DemoUser1', 'DemoUser2'] }
    }, {});
  }
};
