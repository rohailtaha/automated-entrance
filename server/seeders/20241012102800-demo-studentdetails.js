'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.

    // Example:
    await queryInterface.bulkInsert(
      'student_details',
      [
        {
          id: 1,
          user_id: 1,
          student_id: 123456,
          hostel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          user_id: 2,
          student_id: 654321,
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
    queryInterface.bulkDelete('StudentDetails', null, {});
  },
};
