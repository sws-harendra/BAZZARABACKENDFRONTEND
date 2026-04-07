'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        // ✅ email unique constraint

        await queryInterface.addColumn('Users', 'resetPasswordExpire', {
            type: Sequelize.DATE,
            allowNull: true,
        });

    },

    async down(queryInterface, Sequelize) {


        await queryInterface.removeColumn('Users', 'resetPasswordExpire');
    },
};