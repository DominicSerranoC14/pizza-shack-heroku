'use strict';

const { Router } = require('express');
const router = Router();
const { get } = require('../controllers/registerCtrl.js');

router.get('/register', get);

module.exports = router;
