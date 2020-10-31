const { Transaction } = require('../models');
const UserController = require('../controllers/UserController');


class TransactionController {
  async index(req, res) {
    try {
      const transactions = await Transaction.findAll();

      return res.json(transactions);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const transaction = await Transaction.findByPk(req.params.id);

      return res.json(transaction);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const transaction = await Transaction.create(req.body);

      return res.json(transaction);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const transaction = await Transaction.findByPk(req.params.id);

      await transaction.update(req.body);

      return res.json({ transaction });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const transaction = await Transaction.findByPk(req.params.id);

      await transaction.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async newTransaction(transactionJSON) {
    const sender = await UserController.withdrawMoney(transactionJSON);
    const receiver = await UserController.receiveMoney(transactionJSON);
    return [sender, receiver];
  }
}

module.exports = new TransactionController();