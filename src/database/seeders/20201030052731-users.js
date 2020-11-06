module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('user', 
    [
      {
        name: 'John Doe',
        phone: 51999999999,
        balance: 1000.00,
        limit: 500.00,
        cpf: '04555513475',
      },
      {
        name: 'João Silva',
        phone: 51999999999,
        balance: 500.00,
        limit: 500.00,
        cpf: '04111144455',
      },
      {
        name: 'Maria Fernanda',
        phone: 51999999999,
        balance: 500.00,
        limit: 500.00,
        cpf: '54741576847',
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('user', null, {}),
};
  