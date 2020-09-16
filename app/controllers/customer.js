const Customer = require('../models/customer.js');

// Create and Save a new Customer
exports.create = (req, res, next) => {
  // Create a Customer
  const customer = new Customer({
    name: req.body.name,
  });

  // Save Customer in the database
  Customer.create(customer, (err, data) => {
    console.log(err);
    err ? next(err) : res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res, next) => {
  Customer.getAll((err, data) => {
    err ? next(err) : res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res, next) => {
  Customer.findById(req.params.customerId, (err, data) => {
    err ? next(err) : res.send(data);
  });
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res, next) => {
  Customer.updateById(
    req.params.customerId,
    new Customer(req.body),
    (err, data) => {
      err ? next(err) : res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res, next) => {
  Customer.remove(req.params.customerId, (err, data) => {
    err
      ? next(err)
      : res.send({ message: `Customer was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res, next) => {
  Customer.removeAll((err, data) => {
    err
      ? next(err)
      : res.send({ message: `All Customers were deleted successfully!` });
  });
};
