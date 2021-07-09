const Customer = require("../models/customerModel");
const aqp = require("api-query-params");

exports.listCustomers = function (req, res, next) {
  const { filter, skip, limit, sort, projection, population } = aqp(req.query);
  Customer.find(filter)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .select(projection)
    .populate(population)
    .exec((err, customers) => {
      if (err) {
        return next(err);
      }

      res.send(customers);
    });
};

exports.createCustomer = function (req, res) {
  let newCustomer = new Customer(req.body);
  newCustomer.save((item) => {
    res.json(item);
  });
};

exports.readCustomer = function (req, res) {
  Customer.findById(req.params.CustomerId).then((item) => {
    res.json(item);
  });
};

exports.updateCustomer = function (req, res) {
  Customer.findOneAndUpdate(
    { _id: req.params.CustomerId },
    req.body,
    { new: true },
    function (err, item) {
      if (err) res.send(err);
      res.json(item);
    }
  );
};

exports.deleteCustomer = function (req, res) {
  Customer.remove({ _id: req.params.customerId }).then((item) => {
    res.json({ message: "Customer successfully deleted" });
  });
};
