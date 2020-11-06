'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    balance: {
      defaultValue: 1000.00,
      allowNull: false,
      type: Sequelize.NUMERIC(1000,2),
    },
    limit: {
      defaultValue: 500.00,
      allowNull: false,
      type: Sequelize.NUMERIC(1000,2),
    },
    phone: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    cpf: {
      allowNull: false,
      type: Sequelize.STRING(11),
      unique: true,
    },
  }),
  down: queryInterface => queryInterface.dropTable('user'),
};