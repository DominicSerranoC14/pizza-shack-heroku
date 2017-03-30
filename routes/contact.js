'use strict';

const { Router } = require('express');
const router = Router();
const { get } = require('../controllers/contactCtrl.js');

router.get('/contact', get);

module.exports = router;
