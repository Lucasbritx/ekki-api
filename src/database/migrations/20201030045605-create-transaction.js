'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('transaction', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    senderId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
      allowNull: false,
    },
    receiverId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
      allowNull: false,
    },
    value: {
      allowNull: false,
      type: Sequelize.NUMERIC(1000,2),
    },
    transactionDate: {
      allowNull: false,
      type: Sequelize.DECIMAL(0, 16),
    },
  }),


  down: queryInterface => queryInterface.dropTable('transaction'),
};
