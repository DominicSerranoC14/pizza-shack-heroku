'use strict';

const { Router } = require('express');
const router = Router();
const { get, addOrder } = require('../controllers/orderCtrl.js');

router.get('/order', get);
router.post('/order', addOrder);

module.exports = router;
