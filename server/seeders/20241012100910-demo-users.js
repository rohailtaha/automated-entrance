'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.

    // Example:
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'Student 1',
          email: 'student1@gmail.com',
          password: await hashPassword('abcd1234'),
          role: 'student',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'Student 2',
          email: 'student2@gmail.com',
          password: await hashPassword('abcd1234'),
          role: 'student',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'Visitor 1',
          email: 'visitor1@gmail.com',
          password: await hashPassword('abcd1234'),
          role: 'visitor',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'Visitor 2',
          email: 'visitor2@gmail.com',
          password: await hashPassword('abcd1234'),
          role: 'visitor',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: 'Warden 1',
          email: 'warden1@gmail.com',
          password: await hashPassword('abcd1234'),
          role: 'warden',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          name: 'Warden 2',
          email: 'warden2@gmail.com',
          password: await hashPassword('abcd1234'),
          role: 'warden',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('Users', null, {});
  },
};

async function hashPassword(plainPassword) {
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  return hashedPassword;
}
