const { Router } = require('express');
const TransactionController = require('../app/controllers/TransactionController');

const router = Router();

router.get('/', TransactionController.index);

router.get('/:id', TransactionController.show);

router.put('/:id', TransactionController.update);

router.delete('/:id', TransactionController.destroy);

router.post('/', async (req, res, next) => {
    try {
      const newTransac = await TransactionController.newTransaction(req.body);
      res.status(201).send(newTransac);
    } catch (e) {
      console.log(`transaction-post-/-error: ${e.message}`);
      next(e);
    }
  });

  router.get('/extract/:id', async (req, res, next) => {
    try {
      const extract = await TransactionController.getExtract(req.params.id);
      res.status(200).send(extract);
    } catch (e) {
      console.log(`transaction-get-extract/-error: ${e.message}`);
      next(e);
    }
  });


module.exports = router;