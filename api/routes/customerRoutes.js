const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

router.get("/customer", customerController.listCustomers);
router.post("/customer", customerController.createCustomer);
router.get("/customer/:customerId", customerController.readCustomer);
router.put("/customer/:customerId", customerController.updateCustomer);
router.delete("/customer/:customerId", customerController.deleteCustomer);

module.exports = router;
