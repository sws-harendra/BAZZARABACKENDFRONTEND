'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // ✅ email unique constraint
    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });


  },

  async down(queryInterface, Sequelize) {

    await queryInterface.removeColumn('Users', 'resetPasswordToken');
    await queryInterface.removeColumn('Users', 'resetPasswordExpire');

    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    });
  },
};