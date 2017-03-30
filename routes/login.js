'use strict';

const { Router } = require('express');
const router = Router();
const { get } = require('../controllers/loginCtrl.js');

router.get('/login', get);

module.exports = router;
