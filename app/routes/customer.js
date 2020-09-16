module.exports = (app) => {
  const customers = require('../controllers/customer.js');

  // Create a new Customer
  app.post('/customers', (req, res, next) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: 'Content can not be empty!',
      });
    }
    customers.create(req, res, next);
  });

  // Retrieve all Customers
  app.get('/customers', customers.findAll);

  // Retrieve a single Customer with customerId
  app.get('/customers/:customerId', customers.findOne);

  // Update a Customer with customerId
  app.put('/customers/:customerId', (req, res, next) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: 'Content can not be empty!',
      });
    }
    customers.update(req, res, next);
  });

  // Delete a Customer with customerId
  app.delete('/customers/:customerId', customers.delete);

  // Delete all Customers
  app.delete('/customers', customers.deleteAll);
};
