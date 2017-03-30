'use strict';

const { Router } = require('express');
const router = Router();
const { get } = require('../controllers/rootCtrl.js');

router.get('/', get);

module.exports = router;
