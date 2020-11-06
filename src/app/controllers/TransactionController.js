const { Transaction } = require('../models');
const UserController = require('../controllers/UserController');
const { Op } = require("sequelize");
const dayjs = require('dayjs');


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

  createTransactionBody(t) {
    return {
      ...t,
      transactionDate: dayjs().valueOf(),
    }
  }

  async newTransaction(transactionJSON) {
    await UserController.withdrawMoney(transactionJSON);
    await UserController.receiveMoney(transactionJSON);
    const transaction = await Transaction.create(this.createTransactionBody(transactionJSON));
    return transaction;
  }

  async getExtract(userId) {
    const user = await Transaction.findAll({
      where: {
        [Op.or]: [
          { senderId: userId },
          { receiverId: userId }
        ]
      }
    })
  
    return user;
  }

}

module.exports = new TransactionController();