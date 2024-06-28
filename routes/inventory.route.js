// routes/inventory.route.js
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Define routes for vehicle classifications
router.get('/home', inventoryController.getHome);
router.get('/custom', inventoryController.getCustom);
router.get('/sedan', inventoryController.getSedan);
router.get('/suv', inventoryController.getSuv);
router.get('/truck', inventoryController.getTruck);

module.exports = router;