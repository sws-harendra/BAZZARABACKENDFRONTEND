'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Banners', 'isActive', {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    });

    // OPTIONAL fields ensure
    await queryInterface.changeColumn('Banners', 'title', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.changeColumn('Banners', 'subtitle', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.changeColumn('Banners', 'link', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.changeColumn('Banners', 'ctaText', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Banners', 'isActive');
  },
};