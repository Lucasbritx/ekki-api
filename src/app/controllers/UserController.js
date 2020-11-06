const { User } = require('../models');

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const user = await User.create({balance: 1000.00, limit: 500.00, ...req.body});

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      await user.update(req.body);

      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      await user.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async withdrawMoney(transactionJSON) {
    const user = await User.findByPk(transactionJSON.senderId);
    user.balance = Number(user.balance) - Number(transactionJSON.value);
    const newUser = user;
    const response = await user.update(newUser.dataValues, {
      where: {
        id: transactionJSON.userId
      }});
  
    return response;
  }

  async receiveMoney(transactionJSON) {
    const user = await User.findByPk(transactionJSON.receiverId);
    user.balance = await Number(user.balance) + Number(transactionJSON.value);
    const newUser = user;
    const response = await user.update(newUser.dataValues, {
      where: {
        id: transactionJSON.receiverId
      }});
  
    return response;
  }
  
}
module.exports = new UserController();