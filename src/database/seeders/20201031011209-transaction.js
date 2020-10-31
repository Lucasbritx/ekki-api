'use strict';
const dayjs = require('dayjs');


module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('transaction', 
  [
    {
      senderId: 1,
      receiverId: 2,
      value: 20.00,
      transactionDate: dayjs().valueOf(),
    },
    {
      senderId: 1,
      receiverId: 3,
      value: 10.00,
      transactionDate: dayjs().valueOf(),
    },
    {
      senderId: 2,
      receiverId: 1,
      value: 100.00,
      transactionDate: dayjs().valueOf(),
    }
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('transaction', null, {}),
};
