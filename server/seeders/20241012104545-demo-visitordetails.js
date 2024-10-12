'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'visitor_details',
      [
        {
          id: 1,
          user_id: 3,
          cnic: '33105-2390737-9',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          user_id: 4,
          cnic: '12345-8976162-8',
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
    queryInterface.bulkDelete('VisitorDetails', null, {});
  },
};
