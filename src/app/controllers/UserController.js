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
    if((Number(user.balance) - Number(transactionJSON.value)) < 0){
      const rest = Number(transactionJSON.value) - Number(user.balance);
      if(Number(user.limit) - rest >= 0){
        user.limit = Number(user.limit) - rest;
        user.balance = Number(user.balance) - (Number(transactionJSON.value) - rest);
      }
    }else {
      user.balance = Number(user.balance) - Number(transactionJSON.value);
    }
    const response = await user.update(user.dataValues, {
      where: {
        id: transactionJSON.userId
      }});
      
      return response;
    }
    
    async receiveMoney(transactionJSON) {
      const user = await User.findByPk(transactionJSON.receiverId);
      if(Number(user.limit) < 500){
        if(Number(user.limit) + Number(transactionJSON.value) > 500) {
          const rest = Number(transactionJSON.value) - (500 - Number(user.limit));
          user.limit = 500;
          user.balance = Number(user.balance) + rest;
       }else {
         user.limit = Number(user.limit) + Number(transactionJSON.value);
       }
      } else {
      user.balance = await Number(user.balance) + Number(transactionJSON.value);
      }
      const response = await user.update(user.dataValues, {
        where: {
          id: transactionJSON.receiverId
        }});
        
        return response;
      }
      
    }
    module.exports = new UserController();