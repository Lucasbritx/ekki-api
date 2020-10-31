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
    email: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
    },
    balance: {
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