'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.

    // Example:
    await queryInterface.bulkInsert(
      'visits',
      [
        {
          id: 1,
          visitor_id: 3,
          student_id: 123456,
          relation: 'Father',
          visit_time: new Date('2024-11-21T10:30:00Z'),
          status: 'pending',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          visitor_id: 4,
          student_id: 654321,
          relation: 'Uncle',
          visit_time: new Date('2024-11-22T10:30:00Z'),
          status: 'accepted',
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
    queryInterface.bulkDelete('Visits', null, {});
  },
};
