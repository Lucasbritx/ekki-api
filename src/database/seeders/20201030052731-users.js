module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('user', 
    [
      {
        name: 'John Doe',
        email: 'johndoe@phi.com',
        phone: 51999999999,
        balance: 1000.00,
        cpf: '04555513475',
      },
      {
        name: 'João Silva',
        email: 'joaosilva@phi.com',
        phone: 51999999999,
        balance: 500.00,
        cpf: '04111144455',
      },
      {
        name: 'Maria Fernanda',
        email: 'mariafernanda@phi.com',
        phone: 51999999999,
        balance: 500.00,
        cpf: '54741576847',
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('user', null, {}),
};
  