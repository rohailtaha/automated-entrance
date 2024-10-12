'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.

    // Example:
    await queryInterface.bulkInsert(
      'warden_details',
      [
        {
          id: 1,
          user_id: 1,
          hostel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          user_id: 2,
          hostel_id: 2,
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
    queryInterface.bulkDelete('WardenDetails', null, {});
  },
};
