'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.

    // Example:
    await queryInterface.bulkInsert(
      'hostels',
      [
        {
          id: 1,
          name: 'Attar Hostel',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'Hajveri Hostel',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'Razi Hostel',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'Rumi Hostel',
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
    queryInterface.bulkDelete('Hostels', null, {});
  },
};
