// routes/error.route.js
const express = require('express');
const router = express.Router();
const errorController = require('../controllers/errorController');

router.get('/trigger-error', errorController.triggerError);

module.exports = router;